import { toOpenAI } from "@/projects/fail4/services/api";
import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case "POST":
      try {
        const answer = await toOpenAI(request.body);
        return response.status(200).json(answer);
      } catch (error: any) {
        console.log(error);

        return response.status((error as AxiosError).status ?? 500).json({});
      }
    default:
      return response.status(405).json({});
  }
}
