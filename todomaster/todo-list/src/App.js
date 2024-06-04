
import './App.css';
import { RouterProvider } from 'react-router-dom';
import gwan from "./libs/routes/router"
import Todo from './pages/todo/todo';


function App() {
  return (
    <RouterProvider router={gwan}/>
    

  );
}

export default App;
