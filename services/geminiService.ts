import { GoogleGenAI } from "@google/genai";

export const generateVisaStrategy = async (fromCountry: string, toCountry: string) => {
  // Always create a new GoogleGenAI instance right before making an API call
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Using gemini-3-pro-preview for complex text tasks involving advanced technical reasoning
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Generate a brief, highly professional technical overview for a software automation strategy for visa appointment booking from ${fromCountry} to ${toCountry}. 
      Mention specific technical challenges (like bot protection, high traffic periods) and how an AI-powered system (VISATECH AI) would solve them using ML and rotating proxies. 
      Keep it under 150 words. Format as professional advice.`,
      config: {
        temperature: 0.7,
      }
    });
    // Safely extract text output from the response object
    return response.text || "Our technical strategy engine is currently under maintenance. Please contact our support team on WhatsApp for a custom roadmap.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Our AI is analyzing the complexity of this route. Please contact our experts on WhatsApp for a detailed roadmap.";
  }
};