import React, { useState } from 'react'
import validator from 'validator'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import Navbar from './Navbar'

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignupPage, setIsSignupPage] = useState(true)
  const [emailId, setEmailId] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function toggleBtnHandler() {
    setIsSignupPage(!isSignupPage)
  }

  async function btnClickHandler() {
    try {
      if (username.length < 6) {
        toast.error('Enter a valid username')
        return
      }

      if (isSignupPage) {
        if (!validator.isEmail(emailId)) {
          toast.error('Please enter a valid email')
          return
        }

        if (!validator.isStrongPassword(password)) {
          toast.error('Please enter a strong password')
          return
        }

        const res = await axios.post(
          `${baseUrl}/auth/signup`,
          { username, password, emailId },
          { withCredentials: true }
        )
        dispatch(addUser(res.data.data))
        navigate('/profile/edit')
      } else {
        if (password.length < 8) {
          toast.error('Password should be at least 8 characters')
          return
        }

        const res = await axios.post(
          `${baseUrl}/auth/login`,
          { username, password },
          { withCredentials: true }
        )
        dispatch(addUser(res.data.data))
        navigate('/profile')
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error('User already exists')
      } else if (error?.response?.status === 401) {
        toast.error('Invalid Credentials')
      } else {
        toast.error('Something went wrong')
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md transition-all duration-300">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {isSignupPage ? 'Create Account' : 'Welcome Back'}
          </h2>

          <div className="space-y-5">
            {isSignupPage && (
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Email
                </label>
                <input
                  onChange={(e) => setEmailId(e.target.value)}
                  value={emailId}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={`fa-solid ${
                  showPassword ? 'fa-eye-slash' : 'fa-eye'
                } absolute right-4 top-12 text-gray-500 cursor-pointer`}
              ></i>
            </div>

            <button
              onClick={btnClickHandler}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              {isSignupPage ? 'Sign Up' : 'Log In'}
            </button>

            <p className="text-sm text-gray-600 text-center">
              {isSignupPage ? (
                <>
                  Already a user?{' '}
                  <span
                    onClick={toggleBtnHandler}
                    className="text-blue-600 hover:underline cursor-pointer font-medium"
                  >
                    Log in instead
                  </span>
                </>
              ) : (
                <>
                  Not a user?{' '}
                  <span
                    onClick={toggleBtnHandler}
                    className="text-blue-600 hover:underline cursor-pointer font-medium"
                  >
                    Create an account
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
