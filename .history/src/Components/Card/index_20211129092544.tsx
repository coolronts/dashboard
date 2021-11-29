import { ReactNode } from "react";

interface CardProps {
  size?: string;
  Element: ReactNode;
  isHeader?: boolean;
  title?: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({
  size,
  Element,
  isHeader = false,
  title,
  subtitle,
}) => {
  const styles = {
    body: `bg-white px-6 py-8 rounded-2xl shadow ${
      size === "sm" ? "w-3/6" : "w-full"
    }`,
    header: "font-semibold font-sans mb-6 px-6",
    title: "tracking-tighter text-xl text-gray-700 capitalize",
    subtitle: "text-md text-gray-400",
  };
  return (
    <div className={styles.body}>
      {isHeader && (
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      )}
      {Element}
    </div>
  );
};

export default Card;
