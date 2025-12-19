
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS, EDUCATION, ACHIEVEMENTS } from "../data";

const resumeContent = `
Name: ${PERSONAL_INFO.name}
Summary: ${PERSONAL_INFO.summary}
Skills: ${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description.join(' ')}`).join('\n')}
Education: ${EDUCATION.map(e => `${e.degree} at ${e.institution} (${e.period}, GPA: ${e.gpa})`).join('\n')}
Achievements: ${ACHIEVEMENTS.join(', ')}
`;

export const getResumeChatResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI assistant for Veerababu Girajala's portfolio. 
        Your goal is to answer questions about Veerababu based on his resume provided below. 
        Be professional, concise, and enthusiastic. If asked about something not in the resume, 
        politely say you don't have that information.

        Resume Context:
        ${resumeContent}`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with the AI. Please try again later.";
  }
};
