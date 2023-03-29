import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/posts/users/usersSlice'
import './MessengerChat.css'

function MessengerChat() {
  const {currentDialog} = useSelector(selectMessages)
  const {currentUser} = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
		{
      currentDialog.map(message => (
        <h1
         key={message.id}
         style={{backgroundColor: message.fromId === currentUser.id ? 'rgb(120, 119, 127)' : 'rgb(75, 75, 75)blue'}}
         >
           {message.body}
        </h1>
      ))
    }
	 </div>
  )
}

export default MessengerChat
