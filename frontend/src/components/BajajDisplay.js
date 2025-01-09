
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useState } from 'react';
import axios from 'axios';

// Component for displaying individual PDFs
function PdfDisplay({ pdfUrl }) {
    if (!pdfUrl) {
        return <p>No PDF URL provided</p>;
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px auto' }}>
            {/* PDF.js worker for rendering */}
            <div style={{ height: '800px', width: '80%', marginBottom: '10px' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfUrl} defaultScale={1} />
                </Worker>
            </div>
        </div>
    );
}

// Main Component to display PDFs for Reliance
export default function RelianceDisplay() {
    const pdfUrl = 'https://www.bajajallianzlife.com/content/dam/balic/pdf/term-insurance/life-secure-brochure.pdf';
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
    const handleRedirect = () => {
        window.location.href = 'https://www.bajajallianzlife.com/'; // Replace with the target company page URL
    };

    // Button Style
    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#63bfeb',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    return (
        <div>
            <a
    href="https://drive.google.com/file/d/1TukfbUJYe9TJq_ocxQMMbajKNMg7UEbt/view" // Direct download link
    download="bajaj-policy.pdf" // Desired file name for the download
    style={buttonStyle}
>
    Download PDF
</a>
            <h1>Bajaj Allianz</h1>
            <PdfDisplay pdfUrl={pdfUrl} />
            {/* <h2>PDF Rephraser</h2> */}
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={handleRephrase}>Summarize PDF</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {rephrasedText && (
                <div>
                    <h3>Summarized Content:</h3>
                    <div
                        style={{ textAlign: 'left', margin: '20px' }}
                        dangerouslySetInnerHTML={{ __html: rephrasedText }} // Render HTML content
                    ></div>
                </div>
            )}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button style={buttonStyle} onClick={handleRedirect}>
                    Buy Insurance
                </button>
            </div>
        </div>
    );
}