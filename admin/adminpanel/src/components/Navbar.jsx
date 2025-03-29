
import logo from "../assets/finallogo.png"
const Navbar = ({setToken}) => {
    
  return (
    <div className='px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[7vw]' >
        <div className=' text-center flex justify-between items-center'>
        <div className='flex flex-col justify-start '>
            <img src={logo} className='w-[150px]'/>
            <p className='text-pink-400 font-medium text-lg'>ADMIN PANEL</p>
        </div>
        <div><div className='px-6 py-2 bg-black text-white rounded-3xl text-center' onClick={()=>{setToken('');localStorage.removeItem("AdminToken")}}>Logout</div></div>
        </div>
        <hr className="border-none h-[1px] bg-gray-200 " />
    </div>
  )
}

export default Navbar;
