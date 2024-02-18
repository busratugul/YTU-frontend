const OPENAI_API_KEY = j


const generateProblem = async (ders) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Bana ilkokul 3. sınıf düzeyinde bir ${ders} sorusu üret. Altına 4 şıklı yanıtlar ekle. 
          Sonucu json formatında döndür. soru için "soru" property ismi, yanıtlar için "yanitlar" property ismi, doğru cevap için "dogru_cevap" property ismi kullan.`,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });

  const data = await response.json();
  const problem = data.choices[0].message.content;

  const soruObjesi = JSON.parse(problem)

  alert(soruObjesi.soru);
  console.log(soruObjesi);
};
