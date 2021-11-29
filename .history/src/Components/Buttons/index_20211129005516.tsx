interface RoundIconButtonProps {
  Icon: React.ReactNode;
}

const RoundIcon: React.FC<RoundIconButtonProps> = ({ Icon }) => {
  const styles = {
    icon: "ring-2 flex items-center justify-center ring-gray-300 text-2xl w-12 h-12 font-bold p-2 bg-white rounded-full mx-6 shadow text-gray-400 cursor-pointer hover:shadow-2xl",
  };
  return (
    <div className={styles.icon}>
      <div className="m-auto">{Icon}</div>
    </div>
  );
};

interface PrimaryProps {
  name: string;
}

const Primary: React.FC<PrimaryProps> = ({ name }) => {
  const styles = {
    body: "text-center font-semibold w-64 py-3 bg-blue-500 rounded-xl mx-6 shadow text-white cursor-pointer hover:shadow-2xl",
    name: " ",
  };
  return (
    <div className={styles.body}>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export { Primary, RoundIcon };
