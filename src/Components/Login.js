import loginimage from './Images/login.png';
import background from './Images/frame.png';
import Google from './Google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login({ setislogin }) {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  function changeHandler(event) {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  function loginhandler() {
    if (email === '' || password === '') {
      alert("Please fill the form");
    } else {
      setislogin(true);
      console.log("Login successful");
      navigate('/dashboard');  // Redirect to Dashboard after login
    }
  }

  return (
    <div className="text-white relative w-[1160px] mx-auto">
      <div className="flex flex-col absolute top-11 left-0 space-y-6 w-[450px]">
        <h1 className='mt-6 font-semibold text-[1.875rem] leading-[2.375rem]'>Welcome Back</h1>

        <div>
          <h3 className='text-[1.125rem] leading-[1.625rem]'>
            Build skills for today, tomorrow, and beyond.
          </h3>
          <h3 className='text-[1.125rem] leading-[1.625rem] text-blue-200 italic'>
            Education to future-proof your career.
          </h3>
        </div>

        <div className='flex flex-col space-y-1'>
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"  
            value={email} 
            placeholder="Enter Your Email Address" 
            className="w-[420px] h-[40px] px-2 rounded-md bg-[rgb(22,29,41)]" 
            onChange={changeHandler} 
          />
        </div>

        <div className='flex flex-col relative mt-12 space-y-1'>
          <label htmlFor="password">Password</label>
          <input 
            type="password"  
            id="password" 
            name="password" 
            value={password} 
            placeholder="Enter Password" 
            className="w-[420px] h-[40px] px-2 rounded-md bg-[rgb(22,29,41)]" 
            onChange={changeHandler} 
          />

          <div className='text-blue-500 text-sm text-right mr-8 mt-2 hover:cursor-pointer'>Forgot Password</div>
        </div>

        <div className='pt-6'>
          <button className='w-[420px] bg-yellow-400 py-[12px] px-[18px] rounded-[8px]
          font-medium text-[rgb(0,8,20)]' onClick={loginhandler}>Sign in</button>
        </div>

        <Google />
      </div>

      <div>
        <img src={loginimage} alt="login" className="w-[440px] h-[390px] object-cover absolute z-[10] right-5 top-11" loading='lazy' />
        <img src={background} alt="background" className="w-[440px] h-[390px] object-cover absolute z-[0] right-1 top-16" loading='lazy'/>
      </div>
    </div>
  );
}

export default Login;
