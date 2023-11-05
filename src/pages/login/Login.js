import { useEffect, useState } from 'react';
import { useNavigate, withRouter, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from '../../Firebase-config';
import { UserAuth } from '../../components/context/AuthContext'





const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emsg, setEmsg] = useState([]);
    const [isLoading, setIsLoading] = useState(false)



    // FROM THE CONTEXT
    const { googleSignIn, facebookSignIn, user, setUser, theme, switchTheme } = UserAuth();

    const navigate = useNavigate()


    const handleEmailPasswordSignIn =  (e) => {

        e.preventDefault()

        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
        const userDetails = userCredential.user;
        // console.log(userCredential)
        setUser(userDetails)
        window.history.back();
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setEmsg(errorMessage)
        console.log(errorMessage)
        // ..
        });
        // setIsLoading(false)

    }  
    
    const provider = new FacebookAuthProvider();


    const handleFacebookSignIn = () => {
    // signInWithPopup(auth, provider)
    signInWithRedirect(auth, provider)
    .then((result) => {
        // The signed-in user info.
        const userDetails = result.user;
        setUser(userDetails)

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
    });
    }


      
    // const handleFacebookSignIn = async () => {
    //   try {
    //     await facebookSignIn()
    //   }
    //   catch(error) {
    //     console.log(error)
    //   }
    // }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        }
        catch(error) {
            console.log(error)
        }
    }

    // TO NAVIGATE AFTER LOGIN
    // useEffect(() => {
    //     if(user != null) {
    //         window.history.back();
    //     }
    // }, [user]);

    
    


  return (
    <>
    {/* <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div> */}
    <div className=' mx-4  '>
        <div className='max-w-[450px]  mx-auto bg-black/80 text-white'>
            <div className='max-w-[320px] mx-auto py-12 text-center'>
                <h1>Sign In Here</h1>
                <form className='w-full flex flex-col py-4 ' >
                        <p className='text-white font-bold '>E-mail</p>
                        <input type="email" required className='p-2 mx-2 mb-1 rounded text-black ' placeholder='JohnDoe' onChange={(e)=>setEmail(e.target.value)}/>
                        <p className='text-white font-bold'>Password</p>
                        <input type="password" required className='p-2 mx-2 rounded text-black' placeholder='Please enter a strong password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={handleEmailPasswordSignIn} disabled={isLoading} type="submit" className='bg-red-700 py-2 my-6 mx-2 rounded font-bold px-4'>{isLoading? 'Processing...' : 'Login'}</button>
                    <div>
                        <input type="checkbox" className='mr-2' />
                        <span>Remember Me</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}


export default Login
