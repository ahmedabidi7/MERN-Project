import './App.css';
import { Routes, Route } from'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Add from './components/Add';
import Update from './components/Update';
import View from './components/View';
import Pay from './components/Pay';
import Video from './components/Video';
import { useState } from 'react';
function App() {

  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)

  return (  
    
    <div className="App">
      
      <Routes>
        <Route element={<LandingPage setUserName={setUserName} setUser={setUser}/>} path="/" />
        <Route element={<Home user={user} userName={userName}/>} path="/movies" />
        <Route element={<ErrorPage />} path="/unautorized" />

        <Route element={<Pay userName={userName}  />} path="/pay/:id" />
        <Route element={<Video />} path="/video/:link" />

        <Route element={<Add userName={userName}  />} path="/movies/new" />
        <Route element={<Update userName={userName} />} path="/movies/:id/review"/>
        <Route element={<View  userName={userName}/>} path="/movies/:id"/>

      </Routes>
    </div>
  );
}

export default App;
