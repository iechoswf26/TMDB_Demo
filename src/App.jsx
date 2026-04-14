import NavBar from "./components/NavBar.jsx";
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./components/AppRoutes.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
      <div>
        <Router>
            <NavBar/>
            <AppRoutes/>
        </Router>
      </div>

  )
}

export default App;