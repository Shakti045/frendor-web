import { Route, Routes } from 'react-router-dom';
import Policy from './pages/Policy';
import Tnc from './pages/Tnc';
import type AccountDeletionPage from './pages/AccountDelete';


const App = () => {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<Policy/>} />
      <Route path="/terms-of-use" element={<Tnc/>} />
      <Route path="/delete-account" element={<AccountDeletionPage/>} />
    </Routes>
  );
};

export default App;