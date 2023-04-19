declare module "node:process" {
	global {
		namespace NodeJS {
			interface ProcessEnv {
				GITHUB_ID: string;
				GITHUB_SECRET: string;
				OPENAI_API_KEY: string;
			}
		}
	}
}
