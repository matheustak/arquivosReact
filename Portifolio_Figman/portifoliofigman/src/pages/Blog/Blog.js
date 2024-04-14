import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkHtml from 'remark-html';
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      // Substitua 'mainmatheusdevportifolio.wordpress.com' pelo seu domínio do WordPress.com
      const response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/mainmatheusdevportifolio.wordpress.com/posts');
      
      // Verificar se a resposta contém a chave "posts"
      if (response.data && Array.isArray(response.data.posts)) {
        setPosts(response.data.posts);
        setLoading(false);
      } else {
        setError(new Error('Formato de resposta inesperado'));
        setLoading(false);
      }
    } catch (error) {
      console.error('Erro ao buscar os posts:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <p>Carregando posts...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os posts: {error.message}</p>;
  }

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.ID} >
          <h2>{post.title}</h2>
          {/* Renderizando o conteúdo do post usando react-markdown */}
          
         <ReactMarkdown plugins={[remarkHtml]} >{post.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default Blog;

