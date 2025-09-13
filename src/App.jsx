import React from 'react'
import {Routes, Route} from "react-router-dom"
import Auth from './Components/Auth'
import { Toaster } from 'react-hot-toast';
import Profile from './Components/Profile';
import Home from './Components/Home';
import MyProfile from './Components/MyProfile';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Connections from './Components/Connections';
import Chat from './Components/Chat';
import EditPassword from './Components/EditPassword';
import Footer from './Components/Footer';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import RefundPolicy from './Components/Refund';
import Team from './Components/Team';
import ContactUs from './Components/Contact';
import Shipping from './Components/Shipping';
import Error from './Components/Error';



const App = () => {

  // console.log(window.location.hostname)
  return (
    <div>
      <Toaster />
      <Routes>
          <Route path='/auth' element={<Auth />} />

    
          <Route path='/' element={<ProtectedRoutes />}>

            <Route path='/profile/edit' element={<Profile />} />
            <Route path='/profile/edit/password' element={<EditPassword />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<MyProfile />} />
            <Route path='/connections' element={<Connections />} />
            <Route path={`/chat/:receiverId`} element={<Chat />} />

        
          </Route>
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cancellation-refund-policy' element={<RefundPolicy />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/shipping-delivery' element={<Shipping />} />
          <Route path='*' element={<Error />} />
  
      </Routes>
      <Footer />
    </div>
  )
}
  
export default App