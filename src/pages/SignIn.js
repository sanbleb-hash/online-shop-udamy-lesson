import React from 'react'
import { Link } from 'react-router-dom'
import { auth, createUserProfileDocument } from '../fireBase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        }

    } 
  handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
       if(password !== confirmPassword) {
           alert('password do not match');
           return;
       }
       try {
           const user = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user, { displayName });
           
       } catch (error) {
           
       }
 
    }

    handleChange = e=> {
        
     const {value, name } = e.target; 
     this.setState({[name]:value});      
    }

    

render() {
    return (
        <div  className='space-y-2 h-screen w-full'>
        
            <h2 className='text-2xl text-blue-200 text-center pt-10'>sign up or<Link to='/signUp' className='text-blue-900'> sing in</Link> with your email and password</h2>
        <form  onSubmit={ this.handleSubmit } className=' space-y-2 text-gray-500 h-4/6 flex justify-center flex-col items-center'>
            <div className='flex flex-col w-1/2 '>
            <label>Email</label> 
            <input 
            type='email'
            name='email'
            value={this.state.email}
            required
            onChange={ this.handleChange}
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

            <div className='flex flex-col w-1/2 '>
            <label>name</label> 
            <input 
            type='text'
            name='displayName'
            value={this.state.displayName}
            required
            onChange={ this.handleChange}
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
            name='password'
            value={this.state.password}
            required
            onChange={ this.handleChange}
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

            <div className='flex flex-col w-1/2'>
            <label>confirm password</label> 
            <input 
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            required
            onChange={ this.handleChange}
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
            
            <button type='submit'  className='text-lg focus:outline-none  bg-gray-700 block w-1/2 rounded-xl p-2 font-bold text-white'>send</button>
        </form>
        </div>
    )
}
   
}

export default SignIn;
