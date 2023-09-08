import React from 'react'
import './signup.css'

function Signup() {
  return (
    <div className='main'>
        <input type="checkbox" id='chk' aria-hidden="true" />
        <h4>A.K.ISRAEL.</h4>
        <div className="signup">
            <form action="">
                <label htmlFor="chk" aria-hidden="true"> Sign up</label>
                <input type="text" name='txt' placeholder='Name' required="" />
                <input type="text" name='txt' placeholder='ID No' required="" />
                <input type="text" name='txt' placeholder='Phone No' required="" />
                <input type="password" name='pswd' placeholder='Password' required="" /> 
                <input type="password" name='pswd' placeholder='Confirm Password' required="" />
                <button>Sign up</button>
            </form>
        </div>
        <div className="login">
            <form action="">
            <label htmlFor="chk" aria-hidden="true"> Login</label>
            <input type="text" name='txt' placeholder='Phone No' required="" />
            <input type="password" name='pswd' placeholder='Password' required="" /> 
            <button>Login</button>
            </form>

        </div>
    </div>
  )
}

export default Signup