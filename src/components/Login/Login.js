import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/posts/users/usersAPI'
import { selectUsers, toggleCurrentUser } from '../../store/slices/posts/users/usersSlice'
import './Login.css'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { usersData, currentUser} = useSelector(selectUsers)
  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const {login: {value: login}, password: {value: password}} = formRef.current
    
    dispatch(toggleCurrentUser({login, password}))

    formRef.current.reset()
  }

  useEffect(() => {
    if (!usersData.length) {
      dispatch(fetchUsers())
    }
  }, [])
  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])
  return (
    <div className='Login'>
    <div className='container'>
        <div className="center">
            <div className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="instagramLogo" className='instaLogo' />
            </div>
            <div className="inputElement">
              <form ref={formRef} onSubmit={handleSubmit}>
  
                <input name='login' defaultValue={'bret'} type="text" placeholder='phone number, username, or email' className='inputText' />

                <input name='password' defaultValue={'gwenborough'} type="text" placeholder='Password' className='inputText' />
                <input type="submit" value='log in' className='inputButton' />
              </form>
                <div className="line">
                    <span className='arrow'></span>
                    <span className='content'>OR</span>
                    <span className='arrow'></span>
                </div>
                <div className="social_icon">
                    <i className="fab fa-facebook-square"></i>
                    <span>Log in with Facebook</span>
                </div>
                <div className="forgetPassword">
                    Forgot Password?
                </div>
            </div>
        </div>
      <div className="footer">
        <p>Don't have an account?  <span>Sign up</span></p>
      </div>
      <span className='get_app'>Get the app.</span>
      <div className='app_img'>
      <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="get_the_app"  className='google_play_get'/>
      <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="get_the_app"  className='microsoft_get'/>
      </div>
    </div>
    </div>
  )
}

export default Login