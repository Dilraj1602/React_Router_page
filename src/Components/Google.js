
import googleicon from './Images/google-icon-512x512-tqc9el3r.webp'

function Google() {
    return (
        <div className="flex flex-col space-y-6">


            <div className="flex items-center space-x-2 opacity-70">
                <hr className=" w-[43%] "></hr>
                <div >OR</div>
                <hr className="w-[43%] "></hr>
            </div>

            <button className="w-[420px] border border-[rgb(44,51,63)] px-[12px] py-[8px] rounded-[8px] font-medium flex items-center justify-center " >
                <img src={googleicon} alt="google" className="w-4 h-4 mr-2" />
                Sign in With Google</button>


        </div>
    );
}
export default Google;