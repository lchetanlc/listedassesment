import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { Route , Routes, useParams } from 'react-router-dom';

// import {Auth} from './api/auth/Auth'
// import  from './api/auth/auth'

function App() {
  const {id} = useParams()


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Signin/> } />
        <Route path="/Dashboard" element={ <Dashboard/> } /> 
       </Routes> 
    
 
        {/* <Route path=":id" element={<Auth/>} />
         <Route path="contact" element={ <Contact/> } /> */}
    
    </div>
  );
}

export default App;
