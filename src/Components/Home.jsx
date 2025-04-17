import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Counter from "./Counter"
import UsersList from "./UsersList"
// ADD NAVIGATION COMPONENT WHICH WILL ACT AS A NAVBAR
function Home() {

  return (

    
    <BrowserRouter>
      <Routes>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/users" element={<UsersList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Home