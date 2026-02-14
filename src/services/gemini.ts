import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the GoogleGenerativeAI client
const apiKey = import.meta.env.VITE_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const generateLegalResponse = async (userPrompt: string) => {
    if (!apiKey) {
        console.error("VITE_API_KEY is not set.");
        return "System Error: API Configuration Missing. Please contact the administrator.";
    }

    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: `You are Lawxygen AI, a sophisticated, professional legal assistant. 
        Your tone is authoritative, precise, and helpful. 
        Provide clear information on legal concepts, research, and documentation. 
        MANDATORY: Always include a professional disclaimer at the bottom of your response stating that you are an AI and not a licensed attorney, and that your response does not constitute legal advice. 
        Use markdown for formatting (headers, lists, bold text).`
        });

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: userPrompt }] }],
            generationConfig: {
                temperature: 0.7,
            },
        });

        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "An error occurred while communicating with the legal intelligence engine. Please try again.";
    }
};
