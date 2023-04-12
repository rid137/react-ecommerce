import React from 'react'

const Register = () => {
  return (
    <>
    {/* <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div> */}
    <div className='mx-4  '>
      <div className='max-w-[450px]  mb-32 mx-auto bg-black/80 text-white '>
        <div className='max-w-[320px]  mx-auto py-8 text-center'>
            <h1>Sign Up Here</h1>
            <form className='w-full flex flex-col py-4 '>
                    <p className='text-white font-bold'>E-mail</p>
                    <input type="text" required className='p-1 mx-2 my-2 rounded text-black' placeholder='JohnDoe'/>

                    <p className='text-white font-bold'>Password</p>
                    <input type="password" required className='p-1 mx-2 my-2 rounded text-black' placeholder='Please enter a strong password'/>

                    <p className='text-white font-bold'>Confirm Password</p>
                    <input type="password" required className='p-1 mx-2 my-2 rounded text-black' placeholder='Please enter a strong password'/>

                <button type="submit" className='bg-red-700 py-2 mx-2 my-6 rounded font-bold px-4'>Submit</button>
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
