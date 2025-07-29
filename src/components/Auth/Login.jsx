import React, { useState } from 'react'

const Login = () => {

const[email , setEmail] = useState('');
const [password, setPassword] = useState('');


const submitHandler = (e) => {
e.preventDefault();
console.log("hello guys forms submitted");
console.log("email is ", email);
console.log("password is ", password);

setEmail("")
setPassword("")


}

    return (
        <div className='flex w-screen h-screen items-center justify-center'>
            <div className="border-2 rounded-2xl border-emerald-400 p-20">
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col justify-center'>
  <input
    value={email}
    onChange={(e) => {setEmail(e.target.value)}}
    required
    
    className='outline-none bg-transparent border-2 border-emerald-400 text-xl text-white placeholder:text-gray-500 py-3 px-5 rounded-full' type="email"
    placeholder='Enter your email'
  />

  <input
    value={password}
    onChange={(e) =>{ setPassword(e.target.value)}}
    required
   
    className='outline-none bg-transparent border-2 border-emerald-400 text-xl text-white placeholder:text-gray-500 py-3 px-5 mt-3 rounded-full' type="password"
    placeholder='Enter password'
  />

  <button
    type="submit"
    className='outline-none bg-emerald-600 border-none text-xl mt-5 text-white py-3 px-5 rounded-full'>
    Login
  </button>
</form>

            </div>
        </div>
    )
}

export default Login
