import { getParameters } from "codesandbox/lib/api/define";
import { NextApiRequest, NextApiResponse } from "next";
import prettier from "prettier";
import parserHTML from "prettier/parser-html";
import parserCSS from "prettier/parser-postcss";
import parserBabel from "prettier/parser-babel";
import { renderToString } from "react-dom/server";

const wrappers: Record<"js" | "html" | "css", (content?: string) => string> = {
	html(content) {
		return `<!DOCTYPE html>
<!-- generated by fail4 by https://failfa.st -->
${renderToString(
	<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>{content}</title>
			<script defer src="/script.js" />
			<link rel="stylesheet" href="/style.css" />
		</head>
		<body>
			<canvas id="canvas" />
		</body>
	</html>
)}`;
	},
	css() {
		return `/**
 * generated by fail4 by https://failfa.st
 */

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html, body {
	height: 100%;
	width: 100%;
	overflow: hidden;
	background: #a9a9a9;
}
`;
	},
	js(content) {
		return `
/**
 * generated by fail4 by https://failfa.st
 */
function __fail4__ResizeHelper(){
	function handleResize() {
		requestAnimationFrame(() => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});
	}
	handleResize();
	window.addEventListener("resize", handleResize, { passive: true });
}
__fail4__ResizeHelper()
${content}
`;
	},
};

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
	const content = request.body.content as string;
	const title = request.body.title as string;

	const parameters = getParameters({
		template: "static",
		files: {
			"index.html": {
				content: prettier.format(wrappers.html(title), {
					parser: "html",
					plugins: [parserHTML],
				}),
				isBinary: false,
			},
			"style.css": {
				content: prettier.format(wrappers.css(), {
					parser: "css",
					plugins: [parserCSS],
				}),
				isBinary: false,
			},
			"script.js": {
				content: prettier.format(wrappers.js(content), {
					parser: "babel",
					plugins: [parserBabel],
				}),
				isBinary: false,
			},
		},
	});

	response
		.status(200)
		.json(`https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`);
}
