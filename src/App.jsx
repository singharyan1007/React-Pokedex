import { BrowserRouter as Router, Routes, Navigate,Route } from 'react-router-dom';
import  PokedexView  from './components/PokedexView/PokedexView';
import  DetailsView from './components/DetailsView/DetailsView';
import  Navigation  from './components/Navigation/Navigation';
import  Heading  from './components/Heading/Heading';
import PokemonsProvider from './context/PokemonsProvider';
import generations from './data/generation';
import Footer from './components/Footer/Footer'
import './index.css';

function App() {
	return (
		<Router>

		<PokemonsProvider>
			<div className="pokedex-app">
				<Heading />

				<Navigation />

				<Routes>
					<Route exact path="/" element={<Navigate to={ generations[ 0 ].link } />}/>
						
					{
						generations.map( ( { id, link } ) => (
							<Route key={ id } exact path={ '/' + link } element={	<PokedexView generation={ id } />} />
						) )
					}
				</Routes>

				<DetailsView />
				<Footer/>

			</div>
		</PokemonsProvider>
		</Router>
	);
}

export default  App ;