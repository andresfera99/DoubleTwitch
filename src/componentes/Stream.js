import { TwitchPlayer } from "react-twitch-embed";
import { ResizableBox } from "react-resizable";
export default function Stream({ url }) {
	return (
		<ResizableBox
			className="box hover-handles stream-container"
			lockAspectRatio={true}
			minConstraints={[150, 150]}
			maxConstraints={[500, 300]}
		>
			<TwitchPlayer channel={url} id={url} height="100%" />
		</ResizableBox>
	);
}
