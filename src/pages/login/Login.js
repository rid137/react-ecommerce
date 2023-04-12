import { useState } from 'react'
import PropTypes from 'prop-types';


async function LoginUser(credentials) {
    return fetch('http://localhost:8080/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


const Login = ({setToken}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)
    const token = await LoginUser({
            username,
            password,
            // id,
        })
        setToken(token)
        {console.log(token)}
    }


  return (
    <>
    {/* <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div> */}
    <div className=' mx-4  '>
        <div className='max-w-[450px]  mx-auto bg-black/80 text-white'>
            <div className='max-w-[320px] mx-auto py-12 text-center'>
                <h1>Sign In Here</h1>
                <form className='w-full flex flex-col py-4 ' onSubmit={handleSubmit}>
                        <p className='text-white font-bold '>E-mail</p>
                        <input type="email" required className='p-2 mx-2 mb-1 rounded text-black ' placeholder='JohnDoe' onChange={(e)=>setUsername(e.target.value)}/>
                        <p className='text-white font-bold'>Password</p>
                        <input type="password" required className='p-2 mx-2 rounded text-black' placeholder='Please enter a strong password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" className='bg-red-700 py-2 my-6 mx-2 rounded font-bold px-4'>Submit</button>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login
