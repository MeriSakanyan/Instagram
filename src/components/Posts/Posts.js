import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import { selectSearch } from '../../store/slices/posts/search/searchSlice'
import Post from '../Post/Post'
import Spiner from '../Spiner/Spiner'

function Posts() {
    const dispatch = useDispatch()
    const {isLoading, data: posts} = useSelector(selectPosts)
    const searchText = useSelector(selectSearch)

    useEffect(() => {
        if(!posts.length) {
            dispatch(fetchPosts())
        }
    }, [])
    const filteredPosts = useMemo(() => {
        return searchText ?  posts.filter(post => post.name.includes(searchText))
                    .sort(post => post.name.startsWith(searchText) ? -1 : 1)
                    : posts
    },  [searchText, posts])
  return (
    <>
        {
            isLoading? <Spiner /> :
            filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} comments={el.comments} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} />)
        }
    </>
  )
}

export default Posts