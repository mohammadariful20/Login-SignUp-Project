import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function SignIn() {
  const { signin, setuser } = useContext(AuthContext)
  const [showPassword,setShowPassword]=useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(email,password)

    signin(email, password)
      .then(result => {
        const loginUser = result.user
        navigate('/')
        alert('log in successfull')
        setuser(loginUser)

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
      <div className="hero-content flex flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" 
              type={showPassword?"text":"password"} 
              placeholder="password" className="input input-bordered" required />
              <div onClick={handleShowPassword} className="absolute right-2 top-1/3">
                {!showPassword?<FaRegEye/>:<FaRegEyeSlash/>}
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">You Don&#39;t hanve an account <Link className="text-green-300" to='/signup'>Sign up</Link></a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
