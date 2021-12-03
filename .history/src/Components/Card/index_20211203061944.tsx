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
    body: `bg-white rounded-2xl shadow ${
      size === "sm"
        ? "w-1/2"
        : size === "md"
        ? "w-2/3"
        : size === "lg" && "w-full"
    }
      ${type === "secondary" ? "h-16" : type === "primary" && "py-8 px-10"}
      `,
    header: "font-semibold font-sans",
    title: "tracking-tighter text-xl text-gray-700 capitalize",
    subtitle: "text-md text-gray-400",
  };
  return (
    <div className={styles.body}>
      {type === "primary" && isHeader && (
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
