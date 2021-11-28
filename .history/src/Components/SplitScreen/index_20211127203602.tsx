import tw from "tailwind-styled-components"

interface SplitScreenProps {
  children: React.ReactNode[];
  containerWeight?: string;
  leftWeight?: string;
  rightWeight?: string;
}
const SplitScreen: React.FC<SplitScreenProps> = ({
	children,
	containerWeight = 'flex w-full',
  leftWeight = 'w-1/2',
	rightWeight = 'w-1/2',
}) => {
  const Container = tw.div``;
  const Pane = tw.div``;

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