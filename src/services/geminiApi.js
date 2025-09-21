const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `${
  import.meta.env.VITE_GEMINI_API_URL
}?key=${GEMINI_API_KEY}`;

export const generateContent = async (message) => {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API is not defined");
  }

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.log("Error response from Gemini API: ", errorText);
      throw new Error(
        `Gemini API error: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    if (!data || !data.candidates || data.candidates.length === 0) {
      throw new Error("No candidates found in the response");
    }
    return data.candidates[0].content.parts[0].text;
    // console.log(data);
  } catch (error) {
    console.error("Error generating content: ", error);
    throw error;
  }
};
