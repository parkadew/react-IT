import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import router from './libs/routes/router';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
