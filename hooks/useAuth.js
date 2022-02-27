import {auth,provider} from '../Firebase/config'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react';
import Context from '../context/Context';


const{setUser}=useContext(Context)
const useAuth=()=>{


    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUser(user)
    })
    .catch((error) => {
      if (error) {
        window.alert("something went wrong..");
      }
    });
    // const google = () => {
       
    //   };
    

}


export default useAuth;