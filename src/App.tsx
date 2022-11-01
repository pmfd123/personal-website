import './App.scss';
import AppRouter from './AppRouter';
import Footer from './components/modules/Footer';
import Navbar from './components/modules/Navbar';

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
