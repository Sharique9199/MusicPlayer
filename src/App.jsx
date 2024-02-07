import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Album from './Pages/Album'

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/albums/:id' element={<Album/>}/>
    
   </Routes>
   </BrowserRouter>
   
  )
}