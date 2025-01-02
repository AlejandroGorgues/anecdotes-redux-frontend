import { createSlice} from '@reduxjs/toolkit' 
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdote', initialState:[],
  reducers: {
    modifyVote(state, action){
        const anecdoteChanged = action.payload
        return state.map(anecdote =>
        anecdote.id !== anecdoteChanged.id ? anecdote : anecdoteChanged
        )
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
    }
})

export const { modifyVote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
      dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = content => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateVote(content)
    dispatch(modifyVote(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer