
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

// Main Component to display PDFs for Manipal Cigna
export default function RelianceDisplay() {
    const pdfUrl = 'https://www.manipalcigna.com/documents/20124/0/Arogya%20Sanjeevani_Accordian_Apr%2021_Final_V1.pdf/d58eabab-40c4-b304-506b-8c3a50b153d3';
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
        window.location.href = 'https://www.manipalcigna.com/manipal-cigna-sarvah/?campaign=PROFONL&source=SEARCH1_ODC&medium=gs_sarvah_ads_brand_em_roi_manipal_cigna_health_insurance&utm_source=GOOGLE&utm_medium=CPC&utm_campaign=PT_MCHI_SARVAH_GOOGLE_SEARCH_BRAND_EXACT_ROI&utm_content=Manipal_Health_Insurance_TA&gad_source=1&gclid=CjwKCAiApY-7BhBjEiwAQMrrEVP6wLEIGQwTfUL3ZWSm-8lxdf4FNmJla-f9b1BNUfHSkoHi3G3P0xoCti0QAvD_BwE'; // Replace with the target company page URL
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ margin: '0' }}>Manipal Cigna</h1>
                <a
    href="https://drive.google.com/file/d/10wW6tvnYBNkfZP1S4OLddD7Qlmbdhxjg/view" // Direct download link
    download="manipal-policy.pdf" // Desired file name for the download
    style={buttonStyle}
>
    Download PDF
</a>

            </div>
            <PdfDisplay pdfUrl={pdfUrl} />
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button style={buttonStyle} onClick={handleRephrase}>Summarize PDF</button>
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
