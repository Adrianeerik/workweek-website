// /llms.txt (https://llmstxt.org): a plain-Markdown summary of the site for AI assistants and answer engines.
// Generated at build time from the same data the pages render, so it stays in sync with them.
import { email, calendly, siteUrl } from '#lib/site.js';
import { plans, faqs } from '#lib/data/pricing.js';
import { sites } from '#lib/data/work.js';
import { plainText } from '#lib/schema.js';

export const prerender = true;

export function GET() {
	const body = `# Workweek

> Workweek is a small team of designers and developers that builds fast, modern websites for small and growing businesses. Services cover web design and development, wireframing and prototyping, and strategy and positioning, on flexible monthly plans priced in Philippine pesos.

- Website: ${siteUrl}
- Email: ${email}
- Book a call: ${calendly}
- Building websites since 2022, for clients in the Philippines, the United States, Europe, the Middle East and Asia.

## Pages

- [Home](${siteUrl}/): Services, team, process (quote approval, design, development, launch) and mission.
- [Our work](${siteUrl}/work): ${sites.length} websites Workweek has designed and built, with each site's strong points.
- [Pricing](${siteUrl}/pricing): Monthly plans, what each includes, FAQ, and an inquiry form.
- [Contact](${siteUrl}/contact): Contact form, email addresses, and a link to book a strategy call.

## Plans

Monthly website plans for businesses in the Philippines. Prices are negotiable.

${plans.map((p) => `- **${p.price}**: ${p.bestFor}. Includes: ${p.features.join('; ')}. ${p.save}`).join('\n')}

## Frequently asked questions

${faqs.map((f) => `### ${f.question}\n\n${plainText(f.answer).replace(/\n+/g, ' ')}`).join('\n\n')}

## Portfolio

${sites.map((s) => `- [${s.name}](${s.url}): ${s.industry}, ${s.location}. ${s.summary}`).join('\n')}

## Optional

- [Sitemap](${siteUrl}/sitemap.xml)
`;

	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
