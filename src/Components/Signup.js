import signupimage from './Images/signup.png';
import background from './Images/frame.png';
import Google from './Google';
import { useState } from 'react';

function Signup() {
    const [background1, setBackground1] = useState('black');
    const [background2, setBackground2] = useState('rgb(22,29,41)');

    async function bghandler(e) {
        if (e.target.value === 'Student') {
            setBackground1('black');
            setBackground2('rgb(22,29,41)');
        } else {
            setBackground1('rgb(22,29,41)');
            setBackground2('black');
        }
    }

    return (
        <div className="text-white relative w-[1160px] mx-auto">
            {/* left */}
            <div className="flex flex-col absolute top-11 left-0 space-y-4 w-[450px]">
                <h1 className="mt-6 text-[1.875rem] leading-[2.375rem] font-bold">
                    Join the millions learning to code with StudyNotion for free
                </h1>

                <div>
                    <h3 className="text-[1.125rem] leading-[1.625rem]">
                        Build skills for today, tomorrow, and beyond.
                    </h3>
                    <h3 className="text-[1.125rem] leading-[1.625rem] text-blue-200 italic">
                        Education to future-proof your career.
                    </h3>
                </div>

                {/* radio */}
                <div className=" bg-[rgb(22,29,41)] w-[220px] py-[8px] rounded-[20px] flex px-1">
                    <input
                        type="radio"
                        id="Student"
                        name="role"
                        value="Student"
                        className="h-0 w-0"
                        onChange={bghandler}
                    />
                    <label
                        htmlFor="Student"
                        className={`hover:cursor-pointer px-[20px] py-[8px] rounded-[20px]`}
                        style={{ backgroundColor: background1 }}
                    >
                        Student
                    </label>
                    <input
                        type="radio"
                        id="Instructor"
                        name="role"
                        value="Instructor"
                        className="h-0 w-0"
                        onChange={bghandler}
                    />
                    <label
                        htmlFor="Instructor"
                        className={`hover:cursor-pointer px-[20px] py-[8px] rounded-[20px]`}
                        style={{ backgroundColor: background2 }}
                    >
                        Instructor
                    </label>
                </div>

                {/* name */}
                <div className="flex space-x-4">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Enter Your Email Address"
                            className="w-[200px] h-[40px] px-2 rounded-md bg-[rgb(22,29,41)]"
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Enter Your Email Address"
                            className="w-[200px] h-[40px] px-2 rounded-md bg-[rgb(22,29,41)]"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email Address"
                        className="w-[420px] h-[40px] px-2 rounded-md bg-[rgb(22,29,41)]"
                    />
                </div>


                <div className="flex space-x-4">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password">Create Password</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="Enter Password"
                            className="w-[200px] h-[40px] px-2 rounded-md bg-[rgb(22,29,41)]"
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input
                            type="text"
                            id="cpassword"
                            placeholder="Confirm Password"
                            className="w-[200px] h-[40px] px-2 rounded-md bg-[rgb(22,29,41)]"
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <button className="w-[420px] bg-yellow-400 py-[12px] px-[18px] rounded-[8px] font-medium text-[rgb(0,8,20)]">
                        Create Account
                    </button>
                </div>

                <Google />
            </div>

            {/* right side image */}
            <div>
                <img
                    src={signupimage}
                    alt="login"
                    className="w-[440px] h-[390px] object-cover absolute z-[10] right-5 top-11"
                    loading="lazy"
                />
                <img
                    src={background}
                    alt="background"
                    className="w-[440px] h-[390px] object-cover absolute z-[0] right-1 top-16"
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default Signup;
