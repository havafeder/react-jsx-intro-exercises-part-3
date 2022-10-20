function App() {
	return (
		<div>
			<Person
				name="Hava Feder"
				age={23}
				hobbies={["watching tik tok", "annoying my cat", "booking airbnbs"]}
			/>
			<Person
				name="Selena Gomez"
				age={30}
				hobbies={["singing", "making tik toks", "acting"]}
			/>
			<Person
				name="Lisa Kudrow"
				age={50}
				hobbies={["being famous", "being blonde", "being rude"]}
			/>
		</div>
	);
}