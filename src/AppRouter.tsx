import { Routes, Route } from 'react-router-dom';
import Contact from './components/modules/Contact';
import Home from './components/modules/Home';
import CV from './components/modules/CV';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cv' element={<CV />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
