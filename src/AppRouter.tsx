import { Routes, Route } from 'react-router-dom';
import Contact from './components/modules/Contact';
import Home from './components/modules/Home';
import Resume from './components/modules/Resume';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
