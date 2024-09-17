import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './assets/Layout';
import IndexPage from './pages/IndexPage';
import DestinationPage from './pages/DestinationPage';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
function App() {

  return (
    <Routes>
<Route path="/" element={ <Layout />}>
<Route index element={ <IndexPage />} />
<Route path="/destinations" element={ <DestinationPage /> } />
<Route path="/tours" element={ <Tours /> } />
<Route path="/contact" element={ <Contact /> } />
</Route>
    </Routes>
  );
}

export default App
