// Marks every [data-reveal] element with [data-shown] the first time it scrolls into view.
// The animation itself is pure CSS (see app.css). Returns a cleanup function.
//
// We observe each element's parent, not the element: a "down" reveal starts fully clipped
// by its overflow-hidden wrapper, so the element itself would never count as visible.
export function observeReveals() {
	/** @type {Map<Element, Element[]>} */
	const groups = new Map();
	for (const el of document.querySelectorAll('[data-reveal]:not([data-shown])')) {
		const parent = /** @type {Element} */ (el.parentElement);
		groups.set(parent, [...(groups.get(parent) ?? []), el]);
	}

	const io = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;
			for (const el of groups.get(entry.target) ?? []) el.setAttribute('data-shown', '');
			io.unobserve(entry.target);
		}
	});
	for (const parent of groups.keys()) io.observe(parent);
	return () => io.disconnect();
}
