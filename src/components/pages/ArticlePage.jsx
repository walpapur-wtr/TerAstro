import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import striptags from 'striptags';
import './pages_styles/ArticlePage.css'
import ArticleHero from '../ArticleHero';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
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
    const sanitizedContent = striptags(content).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const contentWithImages = sanitizedContent.replace(/\!\[.*?\]\((.*?)\)/g, (match, p1) => `<img src="${p1}" alt="image" />`);
    return <div dangerouslySetInnerHTML={{ __html: contentWithImages }} />;
  };

  return (
    <div className="article-page">
      <ArticleHero title={article ? article.title : null} subTitle={article ? article.author : null} />
      {article ? (
        <div className="article">
          {renderContent(article.content)}
          <p>Published: {new Date(article.createdAt).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;