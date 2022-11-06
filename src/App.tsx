import { createContext } from 'react';
import './App.scss';
import AppRouter from './AppRouter';
import Footer from './components/modules/Footer';
import Navbar from './components/modules/Navbar';

export const ThemeContext = createContext('home');

const App = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <AppRouter />
      </div>
      <Footer />
    </>
  );
};

export default App;
