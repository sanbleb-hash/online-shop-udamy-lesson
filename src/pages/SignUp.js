import React from 'react'
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../fireBase/firebase.utils';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    } 

render() {
    return (
        <div  className='space-y-2 h-screen w-full'>
        
            <h2 className='text-2xl text-blue-200 text-center pt-10'>sign up or<Link to='' className='text-blue-900'> sing in</Link> with your email and password</h2>
        <form  className=' space-y-2 text-gray-500 h-4/6 flex justify-center flex-col items-center'>
            <div className='flex flex-col w-1/2 '>
            <label>Email</label> 
            <input 
            type='text'
            name='email'
            value={this.state.email}
            required
            className='mt-2 
            bg-blue-200 
            text-gray-700 
            text-lg 
            p-2 
            focus:outline-none 
            border-none 
            pl-5  
            rounded-lg' 
            />     
            </div>

            <div className='flex flex-col w-1/2'>
            <label>password</label> 
            <input 
            type='password' 
            name='password ' 
            required
            value={this.state.password} 
            className='
            mt-2 
            mb-5 
            p-2 
            bg-blue-200 
            focus:outline-none 
            border-none pl-5  
            rounded-lg' 
            />     
            </div>
            
            <button type='submit'  className='text-lg  bg-gray-700 block w-1/2 rounded-xl p-2 font-bold text-white'>send</button>
            <button onClick={ signInWithGoogle }  className='text-lg focus:outline-none  bg-gray-700 block w-1/2 rounded-xl p-2 font-bold text-white'>sign in with Google acount</button>

        </form>
        </div>
    )
}
   
}

export default SignUp
