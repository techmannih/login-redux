import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from '../feature/useslice';

export default function Login() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const dispatch =useDispatch('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    

    dispatch(
        login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        })
    );
    };


      return (
    <div className='Login'>
      
      <form action="#" className='Login_form' onSubmit={(e)=>handleSubmit
    (e)}>
      <h1>Login Here </h1>
        <input type="name" placeholder='Username'required value={name} onChange={(e)=> setName(e.target.value)}/>{' '}
        <input type="email" placeholder='Email or Phone Number' required  value={email} onChange={(e)=> setEmail(e.target.value)} />{' '}
        <input type="password" placeholder='Password' required value={password} onChange={(e)=> setPassword(e.target.value)}/>{' '}
        <button type='submit'>Login</button>
        <h3>Create an account register here ?<span>Register</span></h3>
     
     
      </form>
      
    </div>
  )
}





// import React, { useState } from 'react'
// import './Login.css'

// export default function Login() {
//     const[name,setName]=useState('');
//     const[email,setEmail]=useState('');
//     const [password,setPassword]=useState('');

  


//       return (
//     <div className='Login'>
//     <form action="#" className='Login_form'>
//       <h1>Login Here </h1>
//         <input type="name" placeholder='Username'required value={name} onChange={(e)=> setName(e.target.value)}/>{' '}
//         <input type="email" placeholder='Email or Phone Number' required  value={email} onChange={(e)=> setEmail(e.target.value)} />{' '}
//         <input type="password" placeholder='Password' required value={password} onChange={(e)=> setPassword(e.target.value)}/>{' '}
//         <button type='submit'>Login</button>
//         <h3>Create an account register here ?<span>Register</span></h3>
     
     
//       </form>
      
//     </div>
//   )
// }










































// import './Login.css'

// export default function Login() {


//       return (
//     <div className='Login'>
//            <form action="#" className='Login_form' >
//            <h1>Login Here </h1>
//            <input type="name" placeholder='Username'required/>{' '}
//             <input type="email" placeholder='Email or Phone Number' required />{' '}
//             <input type="password" placeholder='Password' required/>{' '}
//             <button type='submit'>Login</button>
//             <h3>don't have an account register here ?<span>Register</span></h3>
//            </form>
      
//      </div>
//   )
// }
