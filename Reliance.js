// // // import React, { useState } from 'react';
// // // import PdfDisplay from '../components/PdfDisplay';


// // // export default function Reliance() {
// // //     const [category] = useState("health")
// // //     const [provider] = useState("reliance")

// // //     const handleClick = async (category, provider) => {
        
// // //     }

// // //   const pdfUrl =
// // //     'https://www.reliancegeneral.co.in/Downloads/reliance-global-health-pw.pdf';

// // //   return (
// // //     <div>
// // //       <h1>Reliance PDF Viewer</h1>
// // //       <PdfDisplay pdfUrl={pdfUrl} />
// // //       <button onClick={handleClick}>Rephrase</button>
// // //     </div>
// // //   );
// // // // }
// // // import React, { useState } from 'react';
// // // import PdfDisplay from '../components/PdfDisplay';

// // // export default function Reliance() {
// // //     const [category] = useState("health");
// // //     const [provider] = useState("reliance");

// // //     const pdfUrl = 'https://www.reliancegeneral.co.in/Downloads/reliance-global-health-pw.pdf';

// // //     return (
// // //         <div>
// // //             <h1>Reliance PDF Viewer</h1>
// // //             <PdfDisplay pdfUrl={pdfUrl} />
// // //             <button onClick={() => alert("Rephrase clicked")}>Summarize</button>
// // //         </div>
// // //     );
// // // }
// // import React, { useState } from 'react';
// // import PdfDisplay from '../components/PdfDisplay';

// // export default function Reliance() {
// //     const [category] = useState("health");
// //     const [provider] = useState("reliance");
// //     const [summary, setSummary] = useState(null); 



// //     const handleClick = async (category, provider) => {
// //       try {
// //         const response = await fetch('http://localhost:8081/api/rephrase-pdf', {
// //           method: 'POST', // Use an object to specify the method and other options
// //           headers: {
// //             'Content-Type': 'application/json', // Specify JSON content type
// //           },
// //           body: JSON.stringify({ category, provider }), // Stringify the data to be sent
// //         });
    
// //         // Check if the response is successful (status code 200-299)
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
    
// //         // Parse the JSON response
// //         const data = await response.json();
// //         setSummary(data.rephrasedText.rephrasedText);
// //         console.log(data);
    
// //         // Handle the response data
// //         console.log('Success:', data);
// //       } catch (error) {
// //         // Handle errors (network issues, etc.)
// //         console.error('Error:', error);
// //       }
// //     };


// //     const pdfUrl = 'https://www.reliancegeneral.co.in/Downloads/reliance-global-health-pw.pdf';

// //     return (
// //         <div>
// //             <h1>Reliance PDF Viewer</h1>
// //             <PdfDisplay pdfUrl={pdfUrl} />
// //             <button onClick={() => {handleClick(category,provider)}}>Summarize</button>
// //             {summary && <div> {summary}
// //               </div>}
// //         </div>
// //     );
// // }
// import React, { useState } from 'react';
// import PdfDisplay from '../components/RelianceDisplay';

// export default function Reliance() {
//   const [category] = useState("health");
//   const [provider] = useState("reliance");
//   const [summary, setSummary] = useState(null);

//   const handleClick = async (category, provider) => {
//     try {
//       const response = await fetch('http://localhost:8081/api/rephrase-pdf', {
//         method: 'POST', 
//         headers: {
//           'Content-Type': 'application/json', 
//         },
//         body: JSON.stringify({ category, provider }), 
//       });

//       // Check if the response is successful (status code 200-299)
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       // Parse the JSON response
//       const data = await response.json();
//       setSummary(data.rephrasedText); // Fix: directly set rephrasedText from the response
//       console.log(data);

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const pdfUrl = 'https://www.reliancegeneral.co.in/Downloads/reliance-global-health-pw.pdf';

//   return (
//     <div>
//       <h1>Reliance</h1>
//       <PdfDisplay pdfUrl={pdfUrl} />
//       <button onClick={() => {handleClick(category, provider)}}>Summarize</button>

//       {summary && (
//         <div dangerouslySetInnerHTML={{ __html: summary }} />
//       )}
//     </div>
//   );
// }