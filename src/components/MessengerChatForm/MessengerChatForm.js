import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/posts/users/usersSlice'

function MessengerChatForm() {
	const dispatch = useDispatch()
	const {activeUserId} = useSelector(selectMessages)
	const {currentUser} = useSelector(selectUsers)
	const formRef = useRef(null)
	const handleSubmit = (e) => {
		e.preventDefault()
		const [{value: body}] = formRef.current
	

		dispatch(addMessage({
			body,
			fromId: currentUser.id,
			toId: activeUserId
		}))

		formRef.current.reset()
	}
  return (
	<form ref={formRef} onSubmit={handleSubmit}>
	 <div className='Chat-input'>
		<input type='text' placeholder='Message...'/>
		<img src={IMAGES.like} alt=''/>
	 </div>
	</form>
  )
}

export default MessengerChatForm
