import remarkGfm from "remark-gfm";
import mdx from "@next/mdx";
const withMDX = mdx({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		providerImportSource: "@mdx-js/react",
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["ts", "tsx", "mdx"],
	swcMinify: true,
	images: { domains: ["img.shields.io"] },
};

export default withMDX(nextConfig);
