import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import NotFound from './pages/notFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index path='vawulens' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App