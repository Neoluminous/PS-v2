import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function test() {
  const resp = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: 'hi'
  });
  console.log(resp.text);
}
test().catch(console.error);
