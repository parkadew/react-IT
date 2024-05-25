
import './App.css';
import { RouterProvider } from 'react-router-dom';
import gwans from "./libs/routes/router"

function App() {
  return (
    < RouterProvider router = {gwans}/>
    // 컴포넌트 (태그형태로 만들어준다)
  );
}


export default App;
