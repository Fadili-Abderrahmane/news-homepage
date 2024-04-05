import React from 'react';
//global style
import GlobalStyle from './global-style';
import Navbar from './components/Navbar/navbar';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			{/* Navbar */}
			<Navbar />
		</>
	);
};

export default App;
