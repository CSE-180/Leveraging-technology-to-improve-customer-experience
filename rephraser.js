const { OpenAI } = require('openai'); // If using OpenAI API (make sure to install the OpenAI package)
const openai = new OpenAI({ apiKey: 'youropenaikey' }); // Replace with your actual OpenAI API key

// Function to rephrase text
const rephraseText = async (text) => {
  try {
    // Check if the text is too long; if so, break it into chunks
    const chunkSize = 1000; // Max tokens for OpenAI, adjust as needed
    const chunks = splitTextIntoChunks(text, chunkSize);

    // Rephrase each chunk and collect the results
    let rephrasedText = '';
    for (const chunk of chunks) {
      const rephrasedChunk = await rephraseChunk(chunk);
      rephrasedText += rephrasedChunk + ' '; // Append rephrased chunk
    }

    return wrapTextInHTML(rephrasedText.trim()); // Wrap the final rephrased text in HTML for formatting
  } catch (error) {
    console.error("Error during rephrasing:", error);
    throw new Error("Rephrasing failed");
  }
};

// Helper function to split text into manageable chunks for rephrasing
const splitTextIntoChunks = (text, chunkSize) => {
  const words = text.split(' ');
  let chunks = [];
  let currentChunk = [];

  for (const word of words) {
    currentChunk.push(word);
    if (currentChunk.join(' ').length >= chunkSize) {
      chunks.push(currentChunk.join(' '));
      currentChunk = [];
    }
  }
  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(' ')); // Push any remaining words
  }

  return chunks;
};

// Function to rephrase a single chunk using the OpenAI API
const rephraseChunk = async (chunk) => {
  try {
    // Make an API request to OpenAI to rephrase the chunk using the newer model gpt-3.5-turbo or gpt-4
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can change this to gpt-4 if you have access
      messages: [{
        role: 'user',
        content:`Rephrase the following text in a more easy to read format give it in html format including headings points highlight imp information: ${chunk}`,
      }],
      max_tokens: 1000,  // Adjust max tokens if needed
    });

    // Return the rephrased text
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error rephrasing chunk:", error);
    throw new Error("Failed to rephrase chunk");
  }
};

// Function to wrap rephrased text in HTML for formatting
const wrapTextInHTML = (text) => {
  // Example: Add bold headings and highlight important points
  let formattedText = text
    .replace(/(\b[A-Z][A-Z]+\b)/g, '<b>$1</b>')  // Bold uppercase words (e.g., headings)
    .replace(/(\b(?:important|key|crucial)\b)/gi, '<span class="highlight">$1</span>')  // Highlight important words
        
  return `<div class="gpt-response"><p>${formattedText}</p></div>`;
};

module.exports = { rephraseText };