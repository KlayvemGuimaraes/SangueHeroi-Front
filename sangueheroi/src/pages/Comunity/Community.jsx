import React, { useState } from 'react';
import styles from './Community.module.css';
import Homebar from "../../components/Homebar/Homebar"

const posts = [
  {
    id: 1,
    name: 'Júnior de La Cruz',
    description: 'Estou muito feliz em contribuir nessa causa extremamente importante para a sociedade',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Juliana Reis',
    description: 'Estou muito feliz em contribuir nessa causa extremamente importante para a sociedade',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Maria da Silva',
    description: 'Estou muito feliz em contribuir nessa causa extremamente importante para a sociedade',
    imageUrl: 'https://via.placeholder.com/150',
  }
];

const Community = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostChange = (e) => setPostContent(e.target.value);
  const handleImageChange = (e) => setSelectedImage(URL.createObjectURL(e.target.files[0]));

  return (
    <div className={styles.communityContainer}>
      <header className={styles.header}>
        <h2>Comunidade</h2>
      </header>

      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <img className={styles.profileImage} src={post.imageUrl} alt={post.name} />
            <div className={styles.postContent}>
              <h3>{post.name}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.createPost}>
        <textarea 
          className={styles.textArea} 
          value={postContent} 
          onChange={handlePostChange}
          placeholder="Legende a sua foto"
        />
        <input 
          type="file" 
          className={styles.fileInput} 
          onChange={handleImageChange}
        />
        <button className={styles.publishButton}>Publicar</button>
      </div>
      <Homebar />

    </div>
  );
};

export default Community;
