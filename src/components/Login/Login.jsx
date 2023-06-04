import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const loginUser=()=>
    {
        navigate("/hotels")
    }
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-neutral-100'>
            <div className=' flex  xl:flex-row  flex-col space-y-10 w-7/12  items-center justify-center bg-white rounded-md shadow-md shadow-slate-300 py-8 '>
                <div className='h-full w-6-12 flex items-center justify-center '><img className='xl:block w-8/12 hidden' src="https://cdn-icons-png.flaticon.com/512/594/594106.png" alt="" /></div>
                <div className='w-6/12 px-4 flex flex-col items-start justify-center text-slate-600'>
                   
                    <div className="flex w-full justify-end space-x-4"><span>Already have an account?</span> <button className='btn btn-neutral btn-sm rounded-sm bg-blue-600 border-none text-zinc-50'>Register</button></div>
                    <div>
                        <h1 className='text-3xl'>Hello! Welcome back.</h1>
                    </div>
                    <div className='my-4'>
                        Log in with your data that you entered during your registration
                    </div>
                    <form action="" className='flex-col space-y-5'>
                        <div className='flex flex-col space-y-2'><label htmlFor="email">Email address</label>
                            <input id='email' type="email" placeholder="example@email.com" className="h-10 input bg-white input-bordered input-xs w-full" /></div>

                        <div className='flex flex-col space-y-2'><label htmlFor="password">Password</label>
                            <input id='password' type="password" placeholder="Enter password" className="h-10 input bg-white input-bordered input-xs w-full" /></div>
                        <button className='btn w-full bg-blue-600 border-none text-white' onClick={loginUser}>Start now</button>
                        <button className='btn btn-outline flex items-center justify-center'><img className='w-1/12' src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" alt="" />Sign with Google</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login