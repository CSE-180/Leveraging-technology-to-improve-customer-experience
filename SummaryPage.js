import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SummaryPage = () => {
  const { category, provider } = useParams();
  const [summary, setSummary] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.post('http://localhost:8081/api/rephrase-pdf', {
          category,
          provider,
        });
        setSummary(response.data.rephrasedText);
      } catch (err) {
        setError('Failed to fetch the summary.');
      }
    };

    fetchSummary();
  }, [category, provider]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Summarized Content</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default SummaryPage;
