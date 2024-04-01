import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


export default function SignUp() {
  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)
  const { createUser, setUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(email,password)
    createUser(email, password)
      .then(result => {
        const newUser = result.user
        // toast('Sign up Successful')
        navigate('/signin')
        setUser(newUser)
      })
      .catch(error => {
        console.error(error.message)
      })
    e.target.reset()
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <ToastContainer />
      <div className="hero-content flex flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type={showPassword?"text":"password"}  placeholder="password" className="input input-bordered" required />
              <div onClick={handleShowPassword} className="absolute right-10 top-1/2">
                {!showPassword?<FaRegEye/>:<FaRegEyeSlash/>}
              </div>
            </div>
            <p>Already You Have an account <Link className="text-green-300" to='/signin'>Log In</Link></p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
