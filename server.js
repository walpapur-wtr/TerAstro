const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Задай шлях до папки зі статтями
const articlesPath = path.join(__dirname, 'articles');

// Ендпоінт для отримання списку статей
app.get('/articles', (req, res) => {
  // Отримай список файлів у папці
  fs.readdir(articlesPath, (err, files) => {
    if (err) {
      console.error('Error reading articles directory:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Читай кожен файл та повертай його як частину відповіді
    const articles = [];
    files.forEach(file => {
      const filePath = path.join(articlesPath, file);
      const article = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      articles.push(article);
    });

    res.json(articles);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
console.log("started!");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});