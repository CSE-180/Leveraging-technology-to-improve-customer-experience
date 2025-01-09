
import React from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfDisplay({ pdfUrl }) {
    if (!pdfUrl) {
        return <p>No PDF URL provided</p>;
    }

    return (
        <div style={{ height: '800px', width: "800px", border: '1px solid #ccc', overflow: 'hidden', margin: "auto" }}>
            {/* Specify the correct worker URL */}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} defaultScale={1} />
            </Worker>
        </div>
    );
}

