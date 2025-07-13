
import Login from '../components/Login'
import Profile from '../components/Profile'
import './App.css'
import Provider from './context/Provider'

function App() {

  return (
    <Provider>
      <h1>Hello</h1>
      <Login/>
      <Profile/>
    </Provider>
  )
}

export default App
