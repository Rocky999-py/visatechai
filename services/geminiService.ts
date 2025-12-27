
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateVisaStrategy = async (fromCountry: string, toCountry: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a brief, highly professional technical overview for a software automation strategy for visa appointment booking from ${fromCountry} to ${toCountry}. 
      Mention specific technical challenges (like bot protection, high traffic periods) and how an AI-powered system (VISATECH AI) would solve them using ML and rotating proxies. 
      Keep it under 150 words. Format as professional advice.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Our AI is analyzing the complexity of this route. Please contact our experts on WhatsApp for a detailed roadmap.";
  }
};
