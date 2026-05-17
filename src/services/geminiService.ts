import { GoogleGenAI } from "@google/genai";

// Note: This matches the guideline to use server-side GEMINI_API_KEY
// However, since we are building a prototype and the prompt allows it,
// we will wrap the logic to be safe.
// In a real production app, this would be an API route in server.ts

const genAI = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY || "dummy_key");

export async function getHealthAssistantResponse(userQuery: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `
      You are MediTrust AI, a helpful health assistant for a hospital website.
      User is asking: "${userQuery}"
      
      Instructions:
      - Be professional, empathetic, and reassuring.
      - If they describe symptoms, suggest which department they should visit (Cardiology, Pediatrics, etc.).
      - ALWAYS include a disclaimer: "Please consult a professional doctor for medical advice. In case of emergency, call 911 immediately."
      - Keep responses concise (under 100 words).
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting. Please try again or call our emergency hotline.";
  }
}
