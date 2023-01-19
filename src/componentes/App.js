import Stream from "./Stream";
import { useState, useEffect } from "react";

function App() {
	const [url1, setUrl1] = useState("");
	const [url2, setUrl2] = useState("");

	const path = window.location.pathname;

	useEffect(() => {
		if (path) {
			let params = path.split("/");

			setUrl1(params[params.length - 2]);
			setUrl2(params[params.length - 1]);
		}
	}, [path]);

	return (
		<div className="App">
			<h2>
				Add your desired streams like this:
				doubletwitch.com/stream_name/stream_name
			</h2>
			<div id="streams">
				<Stream className="stream" url={url1} />
				<Stream className="stream" url={url2} />
			</div>
		</div>
	);
}

export default App;
