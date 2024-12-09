import {useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer.js'

const AnecdoteList = () =>{
    const vote = (id) => {
        dispatch(addVote(id))
    }
    const anecdotes = useSelector(state => state.sort((a1, a2)=>a2.votes-a1.votes))
    const dispatch = useDispatch()
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                    {anecdote.content}
                    </div>
                    <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList