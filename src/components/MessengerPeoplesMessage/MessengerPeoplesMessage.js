import { useDispatch, useSelector } from 'react-redux'
import { selectMessages, toggleActiveUser } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/posts/users/usersSlice'
import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({name, id}) {
    const dispatch = useDispatch()
	const {activeUserId} = useSelector(selectMessages)
	const {currentUser} = useSelector(selectUsers)
  return (
	 <div 
	 style={{backgroundColor: activeUserId === id ? 'darkgray' : ''}}
	 className='Messenger-left-col-people-message'
	 onClick={() => dispatch(toggleActiveUser({userId: id, currentUserId: currentUser.id}))}
	 >
		<div className='Messsage-img'>
			<img src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
