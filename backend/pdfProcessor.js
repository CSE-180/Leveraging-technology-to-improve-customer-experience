const pdf = require('pdf-parse');
const fs = require('fs');

const extractTextFromPDF = async (filePath) => {
  try {
    // Verify that the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error('File does not exist');
    }

    console.log('Reading file for PDF extraction:', filePath);
    const dataBuffer = fs.readFileSync(filePath);

    // Attempt to extract text from the PDF
    const data = await pdf(dataBuffer);
    console.log('Extracted PDF data:', data.text);

    if (!data.text || data.text.trim() === '') {
      throw new Error('PDF contains no extractable text');
    }

    return data.text;
  } catch (error) {
    console.error('PDF Extraction Error:', error.message);
    throw new Error('Failed to extract text from PDF');
  }
};

module.exports = { extractTextFromPDF };