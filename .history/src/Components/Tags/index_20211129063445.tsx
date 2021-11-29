interface dataProps {
  color: string;
  name: string;
}

const Tags: React.FC<dataProps> = ({ color, name }) => {
  const styles = {
    body: `bg-${color}-100 text-${color}-500 ring-2 ring-${color}-300 rounded-md w-36 text-center py-1 text-xs font-bold font-sans`,
    text: `text-${color}-500 bg-${color}-100 `,
  };
  return (
    <div className={styles.body}>
      <p>{name}</p>
    </div>
  );
};
export default Tags;
