export const analyzeText = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      message: "Text is required"
    });
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200);

  res.status(200).json({
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTime: `${readingTime} min`
  });
};
