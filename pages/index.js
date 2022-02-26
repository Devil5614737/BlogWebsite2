import {useState} from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const[showModal,setShowModal]=useState(false);
  return (
    <>
    <Head>
      <title>Blogify</title>
    </Head>
      <Navbar />
      <div className={styles.modalContainer}>
        <button className={styles.createBlogBtn} onClick={()=>setShowModal(true)}>create blog</button>
        {showModal&&    <div className={styles.modal}>
         <textarea autofocus placeholder="write here"></textarea>
         <button>Post</button>
         <button onClick={()=>setShowModal(false)}>Cancel</button>
       </div>}
   
      </div>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.blog}>
            <h2 className={styles.blogHeading}>
              How to change the background in css? How to change the background in css? How to change the background in css?
            </h2>
            <p className={styles.blogContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, enim.
            </p>
            <p className={styles.blogLink}>Read more</p>
          </div>
          <div className={styles.blog}>
            <h2 className={styles.blogHeading}>
              How to change the background in css? How to change the background in css? How to change the background in css?
            </h2>
            <p className={styles.blogContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, enim.
            </p>
            <p className={styles.blogLink}>Read more</p>
          </div>
          <div className={styles.blog}>
            <h2 className={styles.blogHeading}>
              How to change the background in css? How to change the background in css? How to change the background in css?
            </h2>
            <p className={styles.blogContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, enim.
            </p>
            <p className={styles.blogLink}>Read more</p>
          </div>
        </div>
      </main>
      
    </>
  );
}
