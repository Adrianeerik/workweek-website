// Pricing page content. Edit plans and FAQs here — the page renders whatever is in these arrays.
// When you change a price, change its `amount` too (Google reads that one).
import { email, mailto } from '#lib/site.js';

const shared = ['Tailor-made graphic and web design', 'Website forms'];

export const plans = [
	{
		price: '₱1,999/month',
		amount: 1999, // PHP per month, used in the page's structured data
		save: 'Save up to ₱12,000 for your first year!',
		bestFor: 'Best for small to medium businesses',
		features: ['One custom domain', ...shared, 'Basic strategy and positioning', 'Monthly reports', 'Basic landing page to receive inquiries']
	},
	{
		price: '₱3,499/month',
		amount: 3499, // PHP per month, used in the page's structured data
		save: 'Save up to ₱12,000 for your first year!',
		bestFor: 'Best for expanding businesses',
		features: ['Up to 2 domains', ...shared, 'Basic strategy and positioning', 'Monthly reports', 'Simple e-commerce website with checkout via PayMongo']
	},
	{
		price: '₱4,499/month',
		amount: 4499, // PHP per month, used in the page's structured data
		save: 'Save up to ₱18,000 for your first year!',
		bestFor: 'Best for funnels and A-list projects',
		features: ['Up to 3 domains', ...shared, 'Advanced strategy and positioning', 'Monthly reports', 'Full functioning funnel with multiple websites for best SEO']
	}
];

const mail = `<a href="${mailto}">${email}</a>`;

// `answer` is trusted HTML (rendered with {@html}).
export const faqs = [
	{
		question: 'Why should I get a website?',
		answer: 'A website is a platform for your business that can be tailored exactly how you want your audience to see you. It also increases credibility towards your brand when people look up your brand online.'
	},
	{
		question: 'What is the cashback/referral program?',
		answer: `We’re giving back up to 1 free month on any plan for every successful referral. Please contact us for further details at ${mail}.`
	},
	{
		question: 'Is the price negotiable?',
		answer: `Yes. Please contact us at ${mail} for more information.`
	},
	{
		question: 'How long before a website is published?',
		answer: 'Websites usually take 2-6 weeks depending on complexity, but it ultimately depends on the line of communication with the client.'
	},
	{
		question: 'What’s the reasoning behind the price point?',
		answer: 'We want to assist fellow small businesses in the Philippines by helping them create their own platform in various fields.<br /><br />We’re getting help in return by slowly creating a more robust portfolio for our future clients.'
	},
	{
		question: 'What counts as a small business?',
		answer: 'A small business would have the following:<br /><br />Less than three (3) years of active work in the business, and no more than ten (10) employees in the company.'
	},
	{
		question: 'Why help businesses in the Philippines?',
		answer: 'We’re aiming to create an ecosystem of powerful, modern websites for Filipinos to raise the national standard of websites, and to help SMEs have an advantage over their competition.'
	}
];
