import React from 'react';
import styles from '../styles/Home.module.css'
import {auth,provider} from '../Firebase/config'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Navbar=()=>{

// implementing login functionality
const google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        if (error) {
          window.alert("something went wrong..");
        }
      });
  };


return(
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <p className={styles.logo}>Blogify.com</p>
                <p className={styles.loginLink} onClick={google}>Login</p>
            </div>
        </div>
    )
}


export default Navbar;