import tw from "tailwind-styled-components";

interface dataProps {
  color: string;
  name: string;
}

const Tags: React.FC<dataProps> = ({ color, name }) => {
  const Body = tw.div`
  ${(color) => `bg-${color}-100 text-${color}-500 ring-${color}-300 `}

   ring-2 rounded-md w-36 text-center py-1 text-xs font-bold font-sans`;
  const styles = {
    text: `text-${color}-500 bg-${color}-100 `,
  };
  return (
    <Body>
      <p className={styles.text}> {name}</p>
    </Body>
  );
};
export default Tags;
