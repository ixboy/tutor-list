import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Languages from './pages/Languages';
import Lessons from './pages/Lessons';
import Sidebar from './components/Sidebar';
import Statistics from './pages/Statistics';
import Tutors from './pages/Tutors';

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Header/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Tutors/>} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/languages" element={<Languages />} />
      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
