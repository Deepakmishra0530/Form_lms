
import { Routes,Route } from 'react-router-dom';
import Form1 from './components/Form2';
import './App.css';

function App() {


  return (
    <>
    <Routes>

      <Route path='/' element={
        <div className='relative'>

          <Form1/>
        </div>
        
        
        } />
      <Route path='success' element={
        <div className='text-center mt-96 text-3xl'>
         Successfully Submitted !
        </div>
      } />


    </Routes>
     
    </>
  );
};

export default App;
