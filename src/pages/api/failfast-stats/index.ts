import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";
import axios from "axios";

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

async function getDiscordOnlineCount(serverId: string) {
	const { data } = await axios.get(`https://discord.com/api/guilds/${serverId}/widget.json`);
	return data.presence_count;
}

async function getRepoStars(owner: string, repo: string) {
	const { data } = await octokit.rest.repos.get({
		owner,
		repo,
	});

	return data.stargazers_count;
}

async function getOrgStars(org: string) {
	let starCount = 0;

	for await (const response of octokit.paginate.iterator(octokit.rest.repos.listForOrg, {
		org,
		type: "public",
	})) {
		for (const repo of response.data) {
			if (typeof repo.stargazers_count === "number") {
				starCount += repo.stargazers_count;
			}
		}
	}

	return starCount;
}

async function getUser(username: string) {
	const { data } = await octokit.rest.users.getByUsername({
		username,
	});

	return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const discord = await getDiscordOnlineCount("1091306623819059300");

		const hyvStars = await getRepoStars("failfa-st", "hyv");
		const orgStars = await getOrgStars("failfa-st");

		const nerddisco = await getUser("TimPietrusky");
		const pixelass = await getUser("pixelass");
		const doemser = await getUser("doemser");
		const team = [nerddisco, pixelass, doemser];

		res.status(200).json({ discord, hyvStars, orgStars, team });
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch data" });
	}
}
