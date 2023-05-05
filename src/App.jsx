import  PokedexView  from './components/PokedexView/PokedexView';
import  DetailsView  from './components/DetailsView';
import Navigation  from './components/Navigation/Navigation';
import  Heading  from './components/Heading/Heading';
import PokemonsProvider from './context/PokemonsProvider'
import generations from './data/generation';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import './index.css'
function App() {
  

  return (
    
    <Router>
      <PokemonsProvider>
        <div className="p-4 rounded-2xl">
          <Heading />
          <Navigation />
          <Routes>
            <Route exact path="/">
            {() => <Navigate to={generations[0].link} replace />}
            </Route>
              
            {generations.map(({ id, link }) => (
              <Route key={id} exact path={'/' + link}  element={<PokedexView generation={id} />}/>
                
            ))}
          </Routes>
          <DetailsView />
        </div>
      </PokemonsProvider>
      </Router>

  )
}

export default App
