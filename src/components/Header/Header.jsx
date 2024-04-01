import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {

  const {user,signOutuser}=useContext(AuthContext)
  const navigate=useNavigate()

    const navLink=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/signin'>Sign In</NavLink></li>
    <li><NavLink to='/signup'>Sign Up</NavLink></li>
    </>

  const handleSignOut = () => {
    signOutuser()
    .then(()=>{
      toast.success('Sign out Successful')
      navigate('/signin')
    })
    .catch(err=>toast.error(err))
  }
  
  return (
    <div className="navbar bg-base-100">
      <ToastContainer/>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user&&<small>{user.email}</small>
    }
    {
      user?<Link onClick={handleSignOut} className="btn">Log Out</Link>:<Link to='/signin'>Sign in</Link>
    }
  </div>
</div>
  )
}
