import React from 'react'
import './Logout.css'
import { logout,selectUser } from '../feature/useslice'
import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../feature/useslice';
// import { useDispatch } from 'react-redux';

const Logout=()=> {

    const user= useSelector(selectUser)
    const dispatch =useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout());
    };

  return (
    <div className='Logout'>
      <div className="Logout_form">
     <h1>Welcome <span className='user_name'>manish</span></h1>
     <button type='submit' onClick={(e)=>handleLogout(e)}>Logout</button>
     
     </div></div>
  )
}


export default Logout;


















// import React from 'react'
// import './Logout.css'
// const Logout=()=> {

//   return (
//     <div>
//      <h1>Welcome <span className='user_name'>manish</span></h1>
//      <button type='submit'> Logout</button>
//      </div>
//   )
// }


// export default Logout;





// import React from 'react'
// import './Logout.css'


// const Logout=()=> {

//   return (
//     <div className='Logout'>
//       <div className="Logout_form">

      
//        <h1>Welcome <span className='user_name'>manish !</span></h1>
//        <button type='submit'>Logout</button>

//      </div></div>
//   )
// }


// export default Logout;