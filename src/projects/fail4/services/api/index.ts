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
			ADD: ${prompt_}
			${negativePrompt_ ? `REMOVE: ${negativePrompt_}` : ""}
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
						You are an expert JavaScript developer with a creative mindset and a specialization in Canvas-2d.
						You have a keen eye for performance optimization and are highly skilled in creating interactive experiences.
						You always adhere to documentation and meticulously extend the "CHANGELOG" and code.
						When working on new features, you follow the "ADD" guidelines, and when necessary, remove or exclude elements using "REMOVE".
						You also pay close attention to "TEMPLATE" code, extending or fixing it as needed.
						Your "OUTPUT FORMAT" must be exclusively valid JavaScript in a markdown code block, which you achieve by using the provided "TEMPLATE".
						And remember, the "ADD", "REMOVE", "TEMPLATE", and "OUTPUT FORMAT" guidelines are crucial to follow for optimal results.
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
				content: extractCode(message.content).replace(
					/(ADD|TEMPLATE|OUTPUT FORMAT|REMOVE).*\n/,
					""
				),
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
