import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { resetSearchText } from '../../store/slices/posts/search/searchSlice'
import { logOut, selectUsers } from '../../store/slices/posts/users/usersSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
// import Suggestions from '../Suggestions/Suggestions'

function Main() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    useEffect(() => {
        return () => {
            dispatch(resetSearchText())
        }
    }, [])
    useEffect (() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <span className="profile-card">
                    <div className="profile-pic">
                        <img src={currentUser?.avatar} alt=""/>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button onClick={() => dispatch(logOut())} className="action-btn">switch</button>
                </span>
                <p className="suggestion-text">Suggestions for you</p>
                {/* <Suggestions /> */}
            </div>
        </div>
    </section>
  )
}

export default Main