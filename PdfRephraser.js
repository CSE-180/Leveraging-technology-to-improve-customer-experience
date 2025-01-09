import React, { useState } from 'react';
import axios from 'axios';
const PdfRephraser = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [rephrasedText, setRephrasedText] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleRephrase = async () => {
    if (!pdfFile) {
      console.log('No PDF file selected');
      return;
    }

    console.log('PDF file selected, preparing to send request');
    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      const response = await axios.post('http://localhost:5000/api/rephrase-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setRephrasedText(response.data.rephrasedText); // Expect HTML content from the backend
      setError(null);
    } catch (error) {
      console.error('Error in axios request:', error);
      setError('An error occurred while rephrasing the PDF. Please try again.');
      setRephrasedText('');
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleRephrase}>Rephrase PDF</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {rephrasedText && (
        <div>
          <h3>Rephrased Content:</h3>
          <div
            style={{ textAlign: 'left', margin: '20px' }}
            dangerouslySetInnerHTML={{ __html: rephrasedText }} // Render HTML content
          ></div>
        </div>
      )}
    </div>
  );
};

export default PdfRephraser;