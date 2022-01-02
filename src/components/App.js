import "../App.css";
import AddIngredientsGroup from "./ingredientsGroup/AddIngredientsGroup"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/addIngredientsGroup" className="btn btn-header">
                  <span>Ingredients Group</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
                  <Route path="/addIngredientsGroup" element={<AddIngredientsGroup/>}/>
         </Routes>
      </div>
    </Router>
  );
}

export default App;
