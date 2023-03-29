import { useCallback, useState } from "react"

export default function withMoreComments(Component) {
    return (props) => {
       const [showComments, setShowComments] = useState(false)
       const openComments = useCallback(() => {
        setShowComments(true)
       }, [])

       return <Component {...{showComments, openComments}} {...props}/>
    }
}