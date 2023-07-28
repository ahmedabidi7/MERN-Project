import './App.css';
import { Routes, Route } from'react-router-dom';
import Ho from './components/Ho';
import ErrorPage from './components/ErrorPage';
import Explore from './components/Explore';
import Log from './components/log';
import Reg from './components/reg';
import Services from './components/Services';
import Show from './components/Show';
import View from './components/View';
import Pay from './components/Pay';
import Video from './components/Video';
import Home from './pages/home/Home';
import Add from './components/Add';
import { useState } from 'react';
import Footer from './components/Footer/Footer'

function App() {

  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)

  return (  
    
    <div className="App">
    
      <Routes>
      <Route element={<Log setUserName={setUserName} setUser={setUser}/>} path="/log" />
      <Route element={<Reg setUserName={setUserName} setUser={setUser}/>} path="/reg" />
      <Route element={<Ho user={user} userName={userName}/>} path="/movies" />
      <Route element={<Services user={user} userName={userName}/>} path="/services" />

      <Route element={<Show userName={userName}  />} path="/Show/:id" />
        <Route element={<ErrorPage />} path="/unautorized" />
        <Route path='/'element={ <Home user={user}/>}/>
        <Route element={<Pay userName={userName}  />} path="/pay/:id" />
        <Route element={<Video />} path="/video/:link" />

        <Route element={<Add user={user} userName={userName}  />} path="/movies/new" />
        <Route element={<Explore/>} path="/explore"/>
        <Route element={<View  userName={userName}/>} path="/movies/:id"/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
