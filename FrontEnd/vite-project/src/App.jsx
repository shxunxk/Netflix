import './App.css'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './Page/Login/Login'

function App() {

  return (
    <>
      <Router basename='/login'>
        <Routes>
          <Route path=''>
            <Route index={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
