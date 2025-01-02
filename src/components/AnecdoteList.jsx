import {useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer.js'
import Notification from './Notification.jsx'
import { setNotification } from '../reducers/notificationReducer.js'
const AnecdoteList = () =>{
    const dispatch = useDispatch()
    const vote = anecdote => {
        dispatch(addVote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 500))
    }

    const anecdotes = useSelector(({filter, anecdotes, notification }) => {
        return [...anecdotes]
                .sort((a1, a2)=>a2.votes-a1.votes)
                .filter(anecdote => anecdote.content.includes(filter))
    })
    return (
        <div>
            <Notification />
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                    {anecdote.content}
                    </div>
                    <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList