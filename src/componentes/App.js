import Stream from "./Stream";
import { useState } from "react";

function App() {
	const [url1, setUrl1] = useState("lucasrojo");
	const [url2, setUrl2] = useState("lvpes2");

	const changeHandler = (event) => {
		if (event.target.value) {
			event.target.id === "stream1"
				? setUrl1(event.target.value)
				: setUrl2(event.target.value);
		}
	};

	return (
		<div className="App">
			<div className="info-container">
				<h2>Enter the streams you want so watch below 👇</h2>
				<div className="input-container">
					<input id="stream1" type="text" onChange={changeHandler} />
					<input id="stream2" type="text" onChange={changeHandler} />
				</div>
			</div>

			<div id="streams">
				<Stream className="stream" url={url1} />
				<Stream className="stream" url={url2} />
			</div>
		</div>
	);
}

export default App;
