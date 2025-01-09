// import React, { useState } from 'react';

// function RelianceTextSummarizer() {
//   const [text, setText] = useState('');
//   const [summarizedText, setSummarizedText] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSummarize = async () => {
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:8081/api/summarize-text', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ content: text }),
//       });

//       const data = await response.json();
//       setSummarizedText(data.summarizedText);
//     } catch (error) {
//       console.error('Error summarizing text:', error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text to summarize"
//         rows="10"
//         cols="50"
//       />
//       <button onClick={handleSummarize} disabled={loading}>
//         {loading ? 'Summarizing...' : 'Summarize'}
//       </button>

//       {summarizedText && (
//         <div>
//           <h3>Summarized Text:</h3>
//           <p>{summarizedText}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RelianceTextSummarizer;
