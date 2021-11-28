import tw from "tailwind-styled-components"

interface SplitScreenProps {
  children: React.ReactNode;
  containerWeight: string;
  leftWeight: string;
  rightWeight: string;
  weight: string;
}
const Container = tw.div`${(props) => props.weight}`;

const Pane = tw.div`${(props) => props.weight}`;

const SplitScreen: React.FC<SplitScreenProps> = ({
	children,
	containerWeight = 'flex w-full',
  leftWeight = 'w-1/2',
	rightWeight = 'w-1/2',
}) => {
	const [left, right] = children;
	return (
		<Container className={containerWeight}>
			<Pane className={leftWeight}>
				{left}
			</Pane>
			<Pane className={rightWeight}>
				{right}
			</Pane>
		</Container>
	);
}

export default SplitScreen