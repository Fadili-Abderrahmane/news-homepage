import React from 'react';
//global style
import GlobalStyle from './global-style';
import Navbar from './components/Navbar/navbar';
import Banner from './components/Banner/banner';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			{/* Navbar */}
			<Navbar />
			{/* Banner */}
			<Banner />
		</>
	);
};

export default App;
