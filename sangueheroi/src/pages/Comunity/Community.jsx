import React, { useState } from 'react';
import styles from './Community.module.css';
import Homebar from "../../components/Homebar/Homebar";

const initialPosts = [
  {
    id: 1,
    name: 'Júnior de La Cruz',
    description: 'Estou muito feliz em contribuir nessa causa extremamente importante para a sociedade',
    imageUrl: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/07/doacao-de-sangue.jpg',
    title: 'Doação para a Vida'
  },
  {
    id: 2,
    name: 'Juliana Reis',
    description: 'Estou muito feliz em contribuir nessa causa extremamente importante para a sociedade',
    imageUrl: 'https://www.pastoraldacrianca.org.br/images/temas/1655-doacao-de-sangue/1655-doar-sangue-gesto-de-amor-entrevista.jpg',
    title: 'Doe o Seu Melhor'
  },
  {
    id: 3,
    name: 'Maria da Silva',
    description: 'Estou muito feliz em contribuir nessa causa extremamente importante para a sociedade',
    imageUrl: 'https://www.aesc.org.br/wp-content/uploads/2021/11/2021_11_24-Doacao_de_Sangue_HSL_Michelle_Gordon_por_Pixabay-1024x731.jpg',
    title: 'Juntos Pela Vida'
  }
];

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostChange = (e) => setPostContent(e.target.value);
  const handleTitleChange = (e) => setPostTitle(e.target.value);
  const handleImageChange = (e) => setSelectedImage(URL.createObjectURL(e.target.files[0]));

  const handlePostPublish = () => {
    const newPost = {
      id: posts.length + 1,
      name: 'Novo Doante',
      description: postContent,
      imageUrl: selectedImage || 'https://via.placeholder.com/500',
      title: postTitle,
    };
    setPosts([newPost, ...posts]);
    setPostContent('');
    setPostTitle('');
    setSelectedImage(null);
  };

  return (
    <div className={styles.communityContainer}>
      <header className={styles.header} >
        <i className="bi bi-arrow-left-short" style={{ fontSize: '36px' }}></i>
        <h2>Comunidade</h2>
        <i></i>
      </header>

      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <div className={styles.postContent}>
              <h3>{post.title}</h3>
              <h4>{post.name}</h4>
              <p>{post.description}</p>
            </div>
            <img className={styles.postImage} src={post.imageUrl} alt={post.title} />
          </div>
        ))}
      </div>

      <div className={styles.createPost}>
        <input 
          type="text" 
          className={styles.textInput} 
          placeholder="Título da postagem"
          value={postTitle} 
          onChange={handleTitleChange} 
        />
        <textarea 
          className={styles.textArea} 
          value={postContent} 
          onChange={handlePostChange}
          placeholder="Adiocione uma foto á sua postagem"
        />
        <input 
          type="file" 
          className={styles.fileInput} 
          onChange={handleImageChange}
        />
        <button className={styles.publishButton} onClick={handlePostPublish}>
          Publicar
        </button>
      </div>

      <Homebar />
    </div>
  );
};

export default Community;
