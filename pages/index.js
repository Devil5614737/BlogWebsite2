import {useState,useEffect} from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from '../Firebase/config';
import {  getDocs,deleteDoc,doc } from "firebase/firestore";
import { useContext } from 'react';
import Context from '../context/Context';


export default function Home() {
  const {blogData,setBlogData,handleBlogs}=useContext(Context);
  const[showModal,setShowModal]=useState(false);
  const[values,setValues]=useState({
    title:"",
    content:"",
  })

  const handleChange=e=>{
    setValues({...values,[e.target.name]:e.target.value})
  }


  const blogCollections = collection(db, "blogs");

  const createBlog = async () => {
    await addDoc(blogCollections, {
      title: values.title,
      content: values.content,
      createdAt: serverTimestamp(),
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    setShowModal(false)
  };

  useEffect(()=>{
    const getBlogs=async()=>{
      const data=await getDocs(blogCollections);
setBlogData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getBlogs()
  },[createBlog])

// console.log(blogData)
  return (
    <>
    <Head>
      <title>Blogify</title>
    </Head>
      <div className={styles.modalContainer}>
        <button className={styles.createBlogBtn} onClick={()=>{setShowModal(true)}}>create blog</button>
        {showModal&&    <div className={styles.modal}>
          <input className={styles.blogHeadingInput} placeholder='blog title' name='title' onChange={handleChange} value={values.title}/>
         <textarea autofocus placeholder="write here" name='content' onChange={handleChange} value={values.content}></textarea>
         <button onClick={createBlog}>Post</button>
         <button onClick={()=>setShowModal(false)}>Cancel</button>
       </div>}
   
      </div>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {blogData&&blogData.map(blog=>  <div className={styles.blog}>
            <h2 className={styles.blogHeading}>
           {blog.title}
            </h2>
            <p className={styles.blogContent}>
            {/* console.log(str.substring(0,9)+"..."); */}
             {blog.content.substring(0,139)+"..."}
            </p>
            <p className={styles.blogLink} onClick={()=>handleBlogs(blog)}>Read more</p>
          </div>)}
        
        </div>
       
      </main>
      
    </>
  );
}
