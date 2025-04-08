import "./App.css";
import Social from "./components/Social";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";

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
	return (
		<>
			<Header />
			<footer>
				{socialNetworks.map((social) => (
					<section className="socialCard" key={social.key}>
						<Social image={social.image} name={social.name} />
					</section>
				))}
			</footer>
		</>
	);
}

export default App;
