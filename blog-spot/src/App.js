import MainLayout from './components/Layouts/MainLayout'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import NotFound from './components/NotFound'
import Destination from './components/pages/Destination'
import Foods from './components/pages/Foods'
import Festivals from './components/pages/Festivals'
import People from './components/pages/People'

// css
import './components/css/landing.css'


function App() {
  return (
    <>
      <Routes>

        <Route element={<MainLayout /> }>
          <Route path="/" element={<Main />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Foods" element={<Foods />} />
          <Route path="/Festivals" element={<Festivals />} />
          <Route path="/People" element={<People />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
