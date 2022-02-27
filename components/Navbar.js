import React, { useContext } from 'react';
import Context from '../context/Context';
import styles from '../styles/Home.module.css'
import {auth,provider} from '../Firebase/config'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from 'next/link';


const Navbar=()=>{
const {setUser,user}=useContext(Context);

    const useAuth=()=>{


        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          setUser(user)
          localStorage.setItem('token',token)
        })
        .catch((error) => {
          if (error) {
            window.alert("something went wrong..");
          }
        });
    }

const handleLogout=()=>{
  localStorage.removeItem('token')
}



return(
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href={"/"}>
                  <p className={styles.logo}>Blogify.com</p>
                </Link>
                <div className={styles.loginContainer}>
          
                <p className={styles.loginLink}>{user&&user.email}</p>
                {localStorage.getItem('token')?  <p className={styles.loginLink} onClick={handleLogout} >Logout</p>:  <p className={styles.loginLink} onClick={useAuth} >Login</p>}
              

                </div>
            </div>
        </div>
    )
}


export default Navbar;