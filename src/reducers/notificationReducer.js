import { createSlice } from '@reduxjs/toolkit' 

const initialState = ''
const notificationSlice = createSlice({
  name: 'notification', initialState,
  reducers: {
      setMessage(state, action){
        return action.payload
      },
      clearMessage(state, action){
        return ''
      }
  },
})

export const { setMessage, clearMessage } = notificationSlice.actions
export const setNotification = (content, timeout) => {
  return dispatch => {
    dispatch(setMessage(content))
    setTimeout(() => {
      dispatch(clearMessage())
    }, timeout)
      

  }
}
export default notificationSlice.reducer