
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='bg-black font-mplus bg-[url(img/dora_wrap.png)] bg-cover object-cover text-[#772AB3] overflow-hidden'>
      {/* navbar */}
      <Navbar />
      {/* outlet */}
      <div className='min-h-[calc(100vh-309px)]'>
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default App;
