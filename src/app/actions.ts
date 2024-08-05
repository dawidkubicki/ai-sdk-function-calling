"use server";

import { createAI } from "ai/rsc";
import { ToolInvocation as ToolIn } from "ai";
import { ReactNode } from "react";

// This is a placeholder for the context and tool calling the AI
const content = `
    You are a finanancial market analyst and you are using the chatbot to get the market insights.
    Messages inside [] means that is a UI element or a user event. For example: 
    - "[Price of BTC = 55000]" means that the interface of the cryptocurrency price of Bitcoin is displayed.
    - "[Stats of BTC]" means that the interface of the cryptocurrency stats of Bitcoin is displayed.

    If the user want the price, call \`get_crypto_price\` and if the user want the stats, call \`get_crypto_stats\`.
    If the user want the market cap or stats of a given assets, call \`get_crypto_stats\`.
    If the user want the other asset than cryptocurrency, it is an impossible task, so you should respond with an error message that you cannot do that.
    If the user want anything unrelated to the financial market, you should chat with the user, and answer questions but you may give better results with financial markets.
`;

export const sendMessage = async () => {};

export type AIState = Array<{
    id?: number;
    name?: "get_crypto_price" | "get_crypto_stats";
    role: "user" | "assistant" | "system";
    content: string;
}>;

export type UIState = Array<{
    id: number;
    role: "user" | "assistant";
    display: ReactNode;
    toolInvocations?: ToolIn
}>;

export const AI = createAI({
    initialAIState: [] as AIState,
    initialUIState: [] as UIState,
    actions: {
        sendMessage,
    },
});
