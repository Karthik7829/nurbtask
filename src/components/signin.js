
import log from '../images/log.jpg';
import '../App.css';
import firebase from './firebaseConfig';
import { useState } from 'react';
// import { Link} from 'react-router-dom'




export const Signin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')




  const submit = async(e) =>
  {
    e.preventDefault()
    try
    {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      if (user)
      {
        alert("Login Successfull")
      }
    }
    catch(error)
    {
      alert(error)
    }
  }

 
  

  
  
  



return(
    <> 
        <div className='container'>
          <p className='head1'>SignIn</p>
        </div>
        <div>
        <img className='im1' src={log} alt='animage'></img>
        </div>
        <div>
        <form>
          <input type='email' placeholder='Enter your Email ' required className='pswd' value={email} onChange={(e) => setemail(e.target.value)} />
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <input type='password' placeholder='Enter your Password ' required className='pswd' value={password} onChange={(e) => setpassword(e.target.value)}/>
          <i class="fa fa-key" aria-hidden="true"></i>
          <div className='linkto'>
          <p>Create a new account! <a href='./signup'>Sign Up</a></p>
          </div>
        <button className="btn1" onClick={submit}> Log in</button>
        </form>
        </div>
        <footer>
          <p className='para'>All Rights Reserved to Karthik</p>
        </footer>
        </>
  );
}

export default Signin
