
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
    const pdfUrl = 'https://acko-cms.ackoassets.com/Stand_alone_Own_Damage_Private_Car_Policy_1_06cd60d4bf.pdf';
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
        window.location.href = 'https://www.acko.com/?utm_source=google&utm_medium=search&utm_campaign=Search_Brand_Acko_Generic_Top8_Bangalore&adgroup=Acko_Generic_Exact&utm_content=668312920300&utm_term=acko&utm_device=m&gad_source=1&gbraid=0AAAAADDxBOXVFC0IK7zgwbvlgu442-Rrv&gclid=CjwKCAiApY-7BhBjEiwAQMrrEXi4wZrDsmLhk89vv89Q3PsiszwcQDkceNdKthVNnR3MNKCkARuH5BoCPK4QAvD_BwE'; // Replace with the target company page URL
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
    href="https://drive.google.com/file/d/1TEIGDaPkUJqDswi9xQ4xSsGP--SxtJOK/view" // Direct download link
    download="acko-policy.pdf" // Desired file name for the download
    style={buttonStyle}
>
    Download PDF
</a>
            <h1>Acko</h1>
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