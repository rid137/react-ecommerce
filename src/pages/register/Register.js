import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase-config';
import { UserAuth } from '../../components/context/AuthContext'



const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firebaseErrmsg, setFirebaseErrmsg] = useState([])
  const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState(false)
  const [isLoading, setIsLoading] = useState(false)



  const { googleSignIn, user, setUser, theme, facebookSignIn } = UserAuth()

  // const navigate = useNavigate()

  const handleEmailPasswordSignUp =  (e) => {
    e.preventDefault()

    setIsLoading(true)

    if(password !== confirmPassword) {
      setConfirmPasswordErrMsg(true)
      return;
    }


    createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      const userDetails = userCredential.user;
      setUser(userDetails)
      window.history.back();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setFirebaseErrmsg(errorMessage)
      console.log(errorMessage)
    });
  }    
       
    
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    }
    catch(error) {
      console.log(error)
    }
  }

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn()
    }
    catch(error) {
      console.log(error)
    }
  }


  // useEffect(() => {
  //   if(user !== null) {
  //     window.history.back();
  //   }
  // }, [user]);

  return (
    <>
    {/* <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div> */}
    <div className='mx-4  '>
      <div className='max-w-[450px]  mb-32 mx-auto bg-black/80 text-white '>
        <div className='max-w-[320px]  mx-auto py-8 text-center'>
            <h1>Sign Up Here</h1>
            <form className='w-full flex flex-col py-4 '>
                    <p className='text-white font-bold'>E-mail</p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} required className='p-1 mx-2 my-2 rounded text-black' placeholder='JohnDoe'/>

                    <p className='text-white font-bold'>Password</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required className='p-1 mx-2 my-2 rounded text-black' placeholder='Please enter a strong password'/>

                    <p className='text-white font-bold'>Confirm Password</p>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} required className='p-1 mx-2 my-2 rounded text-black' placeholder='Please enter a strong password'/>

                <button onClick={handleEmailPasswordSignUp} disabled={isLoading} type="submit" className='bg-red-700 py-2 mx-2 my-6 rounded font-bold px-4'>{isLoading? 'Processing...' : 'Register'}</button>
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

export default Register
