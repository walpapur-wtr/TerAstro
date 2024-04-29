//ArticlePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import striptags from 'striptags';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Функція для отримання статті за її ID
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/article/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        const data = await response.json();
        setArticle(data.article);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  const renderContent = (content) => {
    // Видаляємо HTML теги та замінюємо &lt; та &gt; на відповідні символи '<' та '>'
    const sanitizedContent = striptags(content).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    // Знаходимо посилання на зображення та замінюємо їх на тег <img>
    const contentWithImages = sanitizedContent.replace(/\!\[.*?\]\((.*?)\)/g, (match, p1) => `<img src="${p1}" alt="image" />`);
    return <div dangerouslySetInnerHTML={{ __html: contentWithImages }} />;
  };

  return (
    <div className="article-page">
      {article ? (
        <div>
          <h2>{article.title}</h2>
          {renderContent(article.content)}
          <p>Author: {article.author}</p>
          <p>Published: {new Date(article.createdAt).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;