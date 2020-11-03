import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { register } from '../actions/userActions';
function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const userRegister = useSelector(state =>state.userRegister);
    const {  loading , userInfo , error} = userRegister;
    const dispatch =useDispatch();

   
    useEffect(() => {
       if(userInfo){
           props.history.push("/");
       }
        return () => {
        };
    }, [userInfo]);
    const submitHandler = (e) => { 
        e.preventDefault();
        dispatch(register(name,email,password,repassword));
    }
  return <div className="signin-form">
      <form className="box" onSubmit={submitHandler}>
          <h1>Register</h1>
        
            <li>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
            </li>
            <li>
                 
                 <input type="text" placeholder="Username" name="name" id="name" onChange={(e) => setName(e.target.value)} ></input>
             </li>
             <li>
                 
                 <input type="text" placeholder="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} ></input>
             </li>
             <li>
                
                 <input type="password" name="password" placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} ></input>
             </li>
             <li>
                 
                 <input type="password" name="repassword" placeholder="password" id="repassword" onChange={(e) => setRepassword(e.target.value)} ></input>
             </li>
             <li>
                <Link to="/signin">Already have an account!</Link>
             </li>
             <li>
                 <button type="submit" className="re-submit" >Register</button>
             </li>
        
      </form>
      
  </div>
}


export default RegisterScreen;
