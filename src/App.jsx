
import './App.css';
import Login from './Component/Login';
import Logout from './Component/Logout';
// import './Login.css'
import { useSelector } from 'react-redux';
import { selectUser } from './feature/useslice';
const App=()=>{

const user = useSelector(selectUser);
  return (
    
    <div>
    {user?<Logout/>:<Login/>}
     </div>
    
    )
}

export default App;









// import './App.css';
// import Login from './Component/Login';
// import Logout from './Component/Logout';

// const App=()=>{


//   return (
    
//     <div className='app'>
      
//       <Login/>
//       <Logout/>
  
    
// </div>
    
// )}

// export default App;
