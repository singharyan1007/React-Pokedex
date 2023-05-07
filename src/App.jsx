import PokedexView from "./components/PokedexView/PokedexView";
import DetailsView from "./components/DetailsView";
import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Heading/Heading";
import PokemonsProvider from "./context/PokemonsProvider";
import generations from "./data/generation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
function App() {
  console.log(generations)
  return (
    <Router>
      <PokemonsProvider>
        <div className="p-4 rounded-2xl">
          <Heading />
          <Navigation />
          <Routes>
            
          <Route key={generations[0].id} path={generations[0].link} element={<PokedexView generation={generations[0].id} />} />
      
        <Route key={generations[1].id} path={generations[1].link} element={<PokedexView generation={generations[1].id} />} />
        <Route key={generations[2].id} path={generations[2].link} element={<PokedexView generation={generations[2].id} />} />
        <Route key={generations[3].id} path={generations[3].link} element={<PokedexView generation={generations[3].id} />} />
        <Route key={generations[4].id} path={generations[4].link} element={<PokedexView generation={generations[4].id} />} />
        <Route key={generations[5].id} path={generations[5].link} element={<PokedexView generation={generations[5].id} />} />
        <Route key={generations[6].id} path={generations[6].link} element={<PokedexView generation={generations[6].id} />} />
      
          </Routes>
          <DetailsView />
        </div>
      </PokemonsProvider>
    </Router>
  );
}

export default App;
