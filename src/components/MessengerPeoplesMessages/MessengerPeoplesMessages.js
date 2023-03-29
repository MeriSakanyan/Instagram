import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/posts/users/usersSlice'

function MessengerPeoplesMessages() {
	const {currentUser, usersData} = useSelector(selectUsers)
	
    const users = useMemo(() => {
		return [...usersData.filter(user => user.id !== currentUser.id)]
	}, [])
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			users.map(el => <MessengerPeoplesMessage key={el.id} id={el.id} name={el.username} />)
		}
	 </div> 
  )
}

export default MessengerPeoplesMessages
