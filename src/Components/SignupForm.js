import React, { useState } from 'react'

const SignupForm = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setconfirmPassword] = useState("")
    let[errorName, setErorName] = useState("")

    function formSubmit(event){
        event.preventDefault();
        
        if(name == "" ){
            setErorName("Name cannot be empty")
                return
        }
        if( email=="" ){
            setErorName("email cannot be empty")
                return
        }
        if(password==""){
            setErorName("Password cannot be empty")
            return
        }
        if(confirmPassword==""){
            setErorName("Confirm Password cannot be empty")
            return
        }
    }

    return (
      <div className='container'>
        <div className="form-container">
            <form action="" method="post" className="complete-form">
                <header>
                    <div className="heading-section">
                        <span><h1>Signup</h1></span>
                    </div>
                </header>
                <main className="form-fields">
                    <div className="inputs">
                        <div className="name"><label for="name">Full Name</label><br/>
                        <input type="text" name="name" id="name" onChange={(event)=>setName(event.target.value)} />
                    </div>

                        <div className="email"><label for="email">Email</label><br/>
                        <input type="email" name="email" id="email" onChange={(event)=>setEmail(event.target.value)} />
                    </div>

                        <div className="password">
                           <div className="password"><label for="password">Password</label><br/>
                            <input type="password" name="password" id="password"  onChange={(event)=>setPassword(event.target.value)} />
                        </div>

                        <div className="confirm-password"><label for="confirm-password">Confirm Password</label><br/>
                            <input type="password" name="confirm-password" id="confirm-password" onChange={(event)=>setconfirmPassword(event.target.value)}  />
                        </div>

                    </div>
                    <div className="signup-button">
                        <label for="signup"></label>
                        <button type="submit" name="signup" id="signup" value="Signup" onClick={formSubmit} >Signup</button>
                    </div>
                    </div>
                </main>
            </form>
            {errorName && 
                <p>{errorName}</p> }
        </div>
        </div>
    )
}

export default SignupForm;