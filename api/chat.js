// api/chat.js
export default async function handler(req, res) {
  const { message } = req.body;

  const apiKey = "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"; // 🔐 Replace with your actual OpenAI API key

  const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a kind and empathetic mental health assistant. Ask follow-up questions, assess emotion, and provide therapeutic conversation, but avoid medical diagnosis." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await openaiResponse.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
