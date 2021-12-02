import { ReactNode } from "react";

interface CardProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  isHeader?: boolean;
  title?: string;
  subtitle?: string;
  type?: "secondary" | "primary";
}

const Card: React.FC<CardProps> = ({
  size = "lg",
  children,
  isHeader = false,
  title,
  subtitle,
  type = "primary",
}) => {
  if (!children) throw new Error("Card must have children");
  const styles = {
    body: `bg-white px-10 py-8 rounded-2xl shadow ${
      type === "primary" && size === "sm"
        ? "w-1/2"
        : size === "md"
        ? "w-2/3"
        : size === "lg" && "w-full"
    }
      ${type === "secondary" && "py-0 px-4"}
      `,
    header: "font-semibold font-sans",
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
      {type}
      {children}
    </div>
  );
};

export default Card;
