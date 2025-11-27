import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateWorkflow } from './components/CreateWorkflow.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<CreateWorkflow />} />
      </Routes>
    </BrowserRouter>
  );
}
