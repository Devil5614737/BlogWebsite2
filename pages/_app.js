import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Context from '../context/Context';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router=useRouter()
  const [user, setUser] = useState(null);
  const[blogData,setBlogData]=useState([]);
  const[blog,setBlog]=useState()


 const handleBlogs=(item)=>{
  setBlog(item);
  router.push('/blog')
 }




  return(
  <>
  
  <Context.Provider value={{user,setUser,blogData,setBlogData,handleBlogs,blog}}>
    <Navbar/>
    <Component {...pageProps} />
  </Context.Provider>
  </>
  )

}

export default MyApp;

