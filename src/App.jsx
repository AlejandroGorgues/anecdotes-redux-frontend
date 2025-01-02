import AnecdoteList from './components/AnecdoteList.jsx'
import AnecdoteForm from './components/AnecdoteForm.jsx'
import { initializeAnecdotes } from './reducers/anecdoteReducer.js'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Filter from './components/Filter.jsx'
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(initializeAnecdotes())
  }, [])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App