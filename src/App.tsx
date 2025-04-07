import { useState } from "react";
import "./App.css";
import Social from "./components/Social";

const socialNetworks = [
	{
		image: "src/assets/facebook-logo.png",
		name: "Facebook",
		key: 1,
	},
	{
		image: "src/assets/instagram-logo.png",
		name: "Instagram",
		key: 2,
	},
	{
		image: "src/assets/pinterest-logo.png",
		name: "Pinterest",
		key: 3,
	},
];

function App() {
	const [selectedNetwork, setSelectedNetwork] = useState("Instagram");
	return (
		<footer>
			{socialNetworks.map((social) => (
				<section className="socialCard" key={social.key}>
					<Social
						image={social.image}
						name={social.name}
						selectedNetwork={selectedNetwork}
						onSelect={setSelectedNetwork}
					/>
				</section>
			))}
		</footer>
	);
}

export default App;
