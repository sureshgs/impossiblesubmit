import './Form.css';
import {useState} from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF-Kvh_Ianb-0ZdeGPeq9F28M2kAGLCxI",
  authDomain: "impossible-submit.firebaseapp.com",
  projectId: "impossible-submit",
  storageBucket: "impossible-submit.appspot.com",
  messagingSenderId: "84117626397",
  appId: "1:84117626397:web:ec707e14e2ed2d73d670f4",
  measurementId: "G-HPHK4J8TGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function Form() {
  
  

    let[icon, setIcon] = useState("fa fa-check")
    let [getName, setgetName] = useState('');
    let[pass, setPass] = useState('');
    const [event, setEvent] = useState(false);
    const [number, setNumber] = useState(0);
    
  
    function handleEvent(){
      setEvent(true)
      if (event === true && pass.length <=8 && number === 0){
          setNumber(100)
          
      }

      else if(event === true && pass.length <=8 && number === 100) {
          setNumber(-100)
          
           
      }
      else {
        setNumber(0)
      }

    }

    function handleIcon(){
      (pass.length <= 5)? setIcon("fa fa-times") : setIcon("fa fa-check")
    }

    function handleSubmit(){
        alert(" It's "+ pass.length +" Characters and HaHa!, You've failed");
        event.preventDefault();
    }
    function onKeyDown(keyEvent) {
      if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
        keyEvent.preventDefault();
      }
    }

   
    console.log(icon)
    console.log(pass.length)
    
  return (
    <div className="App">
    
    <form className="form-container" onSubmit={()=> handleSubmit()} onKeyDown={onKeyDown}>
    <i className="fa fa-info-circle" aria-hidden="true"></i>
      <label>
        <input type="text" 
        placeholder="Enter Name" 
        id="fullname"
        className='inputclass' 
        onChange = {(e) => {setgetName(e.target.value)}} 
        style={{ border: (getName.length <= 0)? '0.5px solid grey': (getName.length <= 2)? '0.5px solid red': '0.5px solid green'}}>

        </input>
      </label>
      
        <label>
        <input type="password"  
        placeholder="Must be 8 Characters" 
        className='inputclass'
        onChange = {(e)=>{setPass(e.target.value);handleEvent(); handleIcon();}}
        style={{border: (pass.length<=0) ? '0.5px solid grey' :(pass.length >=8) ? '0.5px solid green': '0.5px solid red' }}>
      </input> 
      </label>
      
      <span>{pass.length}</span>
      <button type="submit"
      onMouseEnter = {handleEvent}
      // onMouseLeave = {()=> setNumber(-100)}
      className = "buttonclass"
      style ={ (pass.length>=8) ? {transform: 'translate(0px, 0px)', backgroundColor: ' rgb(118 245 76)', fontWeight: '5000', padding:'17px', cursor:'pointer'}:{transform: 'translate('+number+'px, 0px)'}}  > 
      
      <i className ={icon} aria-hidden="true"></i>
      
      </button> 
    
      
    </form>
    
   
  </div>
  )
}
