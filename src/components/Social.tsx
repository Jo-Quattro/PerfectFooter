import "./Social.css";

interface networkProps {
	image: string;
	name: string;
	selectedNetwork: string;
	onSelect: (name: string) => void;
}

function Social({ image, name, selectedNetwork, onSelect }: networkProps) {
	function handleClickSocial() {
		onSelect(name);
	}

	return (
		<>
			{selectedNetwork === name && (
				<img className="social" src={image} alt={name} />
			)}
			<button type="button" onClick={handleClickSocial}>
				{name}
			</button>
		</>
	);
}

export default Social;
