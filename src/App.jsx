const App = () => {
	const name = "John";
	const names = ["Brad", "John", "Mary", "Sara"];
	const loggedIn = true;
  const styles = {
    color: 'green',
    fontSize: '55px'
  }

	return (
		<>
			<div className="text-5xl">App</div>
			<p style={{ color: 'red', fontSize: '24px' }}>Hello {name}</p>
			<p style={styles}>Hello {name}</p>

			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
      { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1> }
      { loggedIn ? <h1>Hello Member</h1> : '' }
      { loggedIn && <h1>Hello Member</h1> }
		</>
	);
};

export default App;
