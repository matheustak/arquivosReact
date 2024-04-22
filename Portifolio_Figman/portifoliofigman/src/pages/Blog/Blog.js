import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Blog/Blog.module.css';


const Blog = () => {
  const [profileData, setProfileData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
  const totalPages = Math.ceil(posts.length / postsPerPage);
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/mainmatheusdevportifolio.wordpress.com/posts');
      
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
  
  const fetchProfile = async () => {
    try {
      const response = await axios.get(`https://gravatar.com/matheusrochaalecrim.json`);
      if (response.data && Array.isArray(response.data.entry)) {
        setProfileData(response.data.entry[0]);
        setLoading(false);
      } else {
        setError(new Error('Formato de resposta inesperado'));
        setLoading(false);
      }
    } catch (error) {
      console.error('Erro ao buscar o perfil:', error);
      setError(error);
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchPosts();
    fetchProfile();
    
  }, []);

  if (loading) {
    return <p>Carregando posts...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os posts: {error.message}</p>;
  }

 function formatDate(dateString){
  const options = {year:'numeric', month:'long', day:'numeric' };
  return new Date(dateString).toLocaleString('pt-BR', options);
 }

 function calculateReadingTime(content) {
  const wordsPerMinute = 200; // Número médio de palavras por minuto
  const wordCount = content.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTimeMinutes} ${readingTimeMinutes === 1 ? 'minuto' : 'minutos'}`;
}



  return (
    
    <div className={styles.container}>
      {currentPosts.map((post) => ( 
       
        <div className={styles.test} key={post.ID} >
           
          <h1 className={styles.entrytitle}  >
            <a href={post.URL} rel="bookmark"   >
              {post.title}
              
            </a>
         
          
        
             
          <div className={styles.entrymeta}> 
            
          <span> 
            <a href="https://mainmatheusdevportifolio.wordpress.com/author/matheusrochaalecrim/"> {post.author.name} </a>
          </span>
            
             <span>
              <a href="https://mainmatheusdevportifolio.wordpress.com/category/react/">{Object.values(post.terms.category)[0].name}</a>
             </span>
               
               <span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                
               </span>
       
               <span>
               {calculateReadingTime(post.content)}
                
               </span>

       
         
         </div> 
         </h1>
  
      
      
        
         
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }}
         
         
           style=
           {{maxHeight:'100%', maxWidth: '100%',  overflowWrap: 'break-word' }}
       
            />
        <div className={styles.entry}>
<div className={styles.entryauthor}>

        <div className={styles.authoravatar}>
          <img alt="" src={post.author.avatar_URL} /* ... */ />
        </div>

          <div className={styles.authorheading}>
            <h2 className={styles.authortitulo}>Publicado por
            <span className={styles.authorname}>{post.author.name}</span>
            </h2>
          </div>
        
        <p className={styles.authorbio}>{profileData.aboutMe}
        <a className={styles.authorlink} href="https://mainmatheusdevportifolio.wordpress.com/author/matheusrochaalecrim/" 
        rel='author'> Ver todos os posts por {post.author.name}</a>
        </p>
        </div>
        <div className={styles.sitepostedon}>
          <strong>Publicado</strong>
          <br />
          <time className={styles.sitedate} dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
 
      </div>
    
    


      ))}




      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Blog;

