import { useState } from "react";
import "./Social.css";

interface networkProps {
	image: string;
	name: string;
}

function Social({ image, name }: networkProps) {
	const [ChangeSocial, setChangeSocial] = useState(name);

	function handleClickSocial() {
		console.log(name);
		setChangeSocial(ChangeSocial);
	}

	return (
		<>
			<img className="social" src={image} alt={name} />
			<button type="button" onClick={handleClickSocial}>
				{name}
			</button>
		</>
	);
}

export default Social;
