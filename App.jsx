
import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [first, setfirst] = useState("SUBMIT")
  const [fullname, setfullname] = useState({
    fname:'',
    lname:'',
    femail:'',
    fnumber:''
  })

  const InputEvent=(event)=>{
    const name=(event.target.name);
    const value=(event.target.value);

  setfullname((preValue)=>{
      if(name==='fname'){
        return{
           fname:value,
           lname:preValue.lname,
           femail:preValue.femail,
           fnumber:preValue.fnumber
      };
      }
      else if(name==='lname'){
        return{
             lname:value,
             fname:preValue.fname,
             femail:preValue.femail,
             fnumber:preValue.fnumber

        };
      }
      else if(name==='femail'){
        return{
             lname:preValue.value,
             fname:preValue.fname,
              femail:value,
             fnumber:preValue.fnumber

        };
      }
      else if(name==='fnumber'){
        return{
          lname:preValue.value,
          fname:preValue.fname,
          femail:preValue.femail,
          fnumber:value
        };
      }
  })
  }

  const onsubmits=(event)=>{
    event.preventDefault();
    
    // alert('Form Submitted');
    setfirst('SUBMITTED')
    
  };

  return (
    <>
    <div className='Details'>

    </div>
    <h2>Your Details:</h2>
    <span>Name:{fullname.fname}</span>
 
    <span>Password:{fullname.lname}</span>
    
    <span>Email:{fullname.femail}</span>
    
    <span>Number:{fullname.fnumber}</span>

    <div >


    <h1>Login Form</h1>

    
    <form  onSubmit={onsubmits}>

<input 
type="text" 
placeholder='Enter your name'
onChange={InputEvent}
name='fname'
value={fullname.fname}
/>

<input 
type="password" 
placeholder='Enter your password'
name='lname'
onChange={InputEvent}
value={fullname.lname}
/>

<input 
type="email" 
placeholder='Enter your Email'
name='femail'
onChange={InputEvent}
value={fullname.femail}
/>

<input 
type="number" 
placeholder='Enter your phone Number'
name='fnumber'
onChange={InputEvent}
value={fullname.fnumber}
/>

<button type='submit'>{first}</button>
</form>
    </div>
   
    
    </>
  )
}

export default App