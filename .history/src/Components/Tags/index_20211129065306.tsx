import tw from "tailwind-styled-components";

interface dataProps {
  color: string;
  name: string;
}

const Tags: React.FC<dataProps> = ({ color, name }) => {
  const Body = tw.div`
  ${(p) => `bg-${color}-100 text-${color}-500 ring-${color}-300 `}
   ring-2 rounded-md w-36 text-center py-1 text-xs font-bold font-sans`;

  return (
    <Body>
      <p> {name}</p>
    </Body>
  );
};
export default Tags;
