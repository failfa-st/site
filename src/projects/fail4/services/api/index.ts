import { ChatCompletionRequestMessage } from "openai";
import { nanoid } from "nanoid";
import { openai } from "@/projects/fail4/services/api/openai";
import { extractCode, miniPrompt } from "@/projects/fail4/utils/prompt";

export async function toOpenAI({
	prompt = "extend the code",
	negativePrompt = "",
	temperature = "0.2",
	template = "",
	//
	model = "gpt-3.5-turbo",
	maxTokens = "2048",
}) {
	const negativePrompt_ = negativePrompt.trim();
	const prompt_ = prompt.trim();

	const nextMessage: ChatCompletionRequestMessage = {
		role: "user",
		content: miniPrompt`
			INCLUDE: ${prompt_}
			${negativePrompt_ ? `EXCLUDE: ${negativePrompt_}` : ""}
			TEMPLATE:
			\`\`\`javascript
			${template.trim().replace(/^\s+/gm, "").replace(/^\n+/g, "").replace(/\s+/, " ")}
			\`\`\`
			`,
	};

	const task = `${prompt_}${negativePrompt_ ? ` | not(${negativePrompt_})` : ""}`;

	try {
		const response = await openai.createChatCompletion({
			model: process.env.NODE_ENV === "production" ? "gpt-3.5-turbo" : model,
			max_tokens: process.env.NODE_ENV === "production" ? 2048 : Number.parseInt(maxTokens),
			temperature: Number.parseFloat(temperature),
			messages: [
				{
					role: "system",
					content: miniPrompt`
You ar a **JAVASCRIPT EXPERT**. You excel in **CREATIVITY**, **PERFORMANCE** & INTERACTION.
Submit only ROBUST & FUNCTIONAL code.
**NEVER** decline projects. **NEVER** provide explanations, comments, or notes.
ADAPT and UPDATE code as needed. Use **PURE JAVASCRIPT** exclusively.
**OPTIMIZE** templates, **INCORPORATE** features, & **CONSERVE** tokens.
Stick to **PLAIN JAVASCRIPT**:
\`\`\`javascript
// Minified Code …
\`\`\`
					`,
				},
				nextMessage,
			],
		});

		const { message } = response.data.choices[0];

		if (message) {
			console.log("ORIGINAL OUTPUT");
			console.log(message.content);
			return {
				...message,
				content: extractCode(message.content),
				task,
				id: nanoid(),
			};
		}

		// Something broke
		// ToDo: fix it :)
		return {
			content: "/* BROKEN */",
			task,
			id: nanoid(),
		};
	} catch (error) {
		throw error;
	}
}
