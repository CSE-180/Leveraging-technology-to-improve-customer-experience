const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { extractTextFromPDF } = require('./pdfProcessor'); // Ensure this is implemented correctly
const { rephraseText } = require('./rephraser.js');

const app = express();
const PORT = 5000; // Use this port to avoid conflict

const corsOptions = {
  origin: 'http://localhost:3000', // Allow frontend to make requests
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the required HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow Content-Type header
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'login_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Routes
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO users (username, email, password) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.json({ error: err.message });
    }
    return res.json({ success: true, data });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error("Error querying data:", err);
      return res.json({ error: err.message });
    }
    if (data.length > 0) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false, message: "Invalid email or password" });
    }
  });
});

// Multer configuration for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

// PDF Rephrase API
app.post('/api/rephrase-pdf', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { category, provider } = req.body;

  try {
    const filePath = req.file.path;

    console.log(`Received file: ${filePath}`);

    // Extract text from the uploaded PDF
    const extractedText = await extractTextFromPDF(filePath);

    if (!extractedText || extractedText.trim() === '') {
      console.error('Error: No text extracted from PDF');
      return res.status(500).json({ error: 'No text extracted from PDF' });
    }

    console.log('Text extracted from PDF:', extractedText);

    // Rephrase the extracted text
    const rephrasedText = await rephraseText(extractedText);

    if (!rephrasedText || rephrasedText.trim() === '') {
      console.error('Error: Rephrased text is empty');
      return res.status(500).json({ error: 'Rephrased text is empty' });
    }

    console.log('Rephrased text generated successfully');
    res.json({ rephrasedText });

    // Clean up the uploaded file after processing
    fs.unlinkSync(filePath);
  } catch (error) {
    console.error('Unexpected error during PDF processing:', error.message);
    res.status(500).json({ error: 'An error occurred while processing the PDF' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
