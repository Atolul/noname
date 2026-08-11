import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './Pages/home'
import { CharD1 } from './Pages/chard1'
import { CharA1 } from './Pages/chara1'
import { Mod1 } from './Pages/mod1'


function App() {

    return(
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path='/chard1' element={<CharD1/>} />
                <Route path='/chara1' element={<CharA1/>} />
                <Route path='/mod1' element={<Mod1/>} />
                </Route>
            
                
            </Routes>
        </Router>
    )
  
}

export default App
