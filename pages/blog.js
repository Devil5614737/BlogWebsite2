import React, { useContext } from 'react';
import Context from '../context/Context';
import styles from '../styles/Blog.module.css';


function blog() {

  const{blog}=useContext(Context)



  return (
<main className={styles.blogContainer}
>
<div className={styles.blog}>
    <h2 className={styles.blogHeading}>
    {blog&&blog.title}
    </h2>
    <p className={styles.date}>
        12-sep-2022
    </p>
    <p className={styles.author}>
        author:<span>{blog&&blog.author.name}</span>
    </p>
    <p className={styles.blogContent}>
    {blog&&blog.content}
    </p>
</div>



</main>
  )
}

export default blog