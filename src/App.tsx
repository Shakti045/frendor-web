import { Route, Routes } from 'react-router-dom';
import Policy from './pages/Policy';
import Tnc from './pages/Tnc';


const App = () => {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<Policy/>} />
      <Route path="/terms-of-use" element={<Tnc/>} />
    </Routes>
  );
};

export default App;