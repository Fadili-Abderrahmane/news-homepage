import React, { useState } from 'react';

const App: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<h1>Hello World</h1>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	);
};

export default App;
