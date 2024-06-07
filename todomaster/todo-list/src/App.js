
import './App.css';
import { RouterProvider } from 'react-router-dom';
import gwan from "./libs/routes/router"

function App() {
  return (
    <RouterProvider router={gwan} />

  );
}

export default App;
