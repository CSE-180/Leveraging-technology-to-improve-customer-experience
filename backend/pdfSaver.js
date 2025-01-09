const PDFDocument = require('pdfkit');
const fs = require('fs');

// Function to save text to a new PDF
function saveTextToPDF(text, outputPath) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(outputPath));
  doc.fontSize(12).text(text);
  doc.end();
}

module.exports = { saveTextToPDF };