//server.js
const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

const ARTICLES_DIR = 'articles';
//const TRASH_DIR = 'trash';

// Middleware to serve React app
app.use(express.static('build'));

// Endpoint to save article
app.post('/save-article', async (req, res) => {
  const { title, content, categories } = req.body;
  const author = req.body.author || 'default author';
  const createdAt = new Date().toISOString();

  try {
    // Create articles directory if it doesn't exist
    await fs.mkdir(ARTICLES_DIR, { recursive: true });

    // Get the list of articles in the directory
    const articles = await fs.readdir(ARTICLES_DIR);

    // Generate unique ID based on the number of existing articles
    const id = articles.length + 1;

    // Generate file name with ID and title
    const fileName = `${id}-${title.replace(/ /g, '_')}.json`;

    // Construct path to the new article file
    const filePath = path.join(ARTICLES_DIR, fileName);

    // Write article data to the file
    await fs.writeFile(filePath, JSON.stringify({ id, title, content, author, createdAt, categories }, null, 2));

    res.status(200).send('Article saved successfully!');
  } catch (error) {
    console.error('Error saving article:', error);
    res.status(500).send('Failed to save article');
  }
});

// Endpoint to get all articles
app.get('/get-articles', async (req, res) => {
  try {
    const articles = [];

    // Read all files in the articles directory
    const files = await fs.readdir(ARTICLES_DIR);

    // Read content of each article file and add to articles array
    for (const file of files) {
      const filePath = path.join(ARTICLES_DIR, file);
      const data = await fs.readFile(filePath);
      articles.push(JSON.parse(data));
    }

    res.status(200).json({ articles });
  } catch (error) {
    console.error('Error getting articles:', error);
    res.status(500).send('Failed to get articles');
  }
});

// Endpoint to get a single article by its ID
app.get('/article/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Read the article file with the corresponding ID
    const files = await fs.readdir(ARTICLES_DIR);
    const articleFile = files.find(file => file.startsWith(`${id}-`));

    if (!articleFile) {
      return res.status(404).send('Article not found');
    }

    const filePath = path.join(ARTICLES_DIR, articleFile);
    const data = await fs.readFile(filePath);
    const article = JSON.parse(data);

    res.status(200).json({ article });
  } catch (error) {
    console.error('Error getting article:', error);
    res.status(500).send('Failed to get article');
  }
});


// Always return React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});