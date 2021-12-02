import { useEffect, useState } from "react";

import { ArrowRight } from "../Icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface IconProps {
  Icon: React.ReactNode;
  name: string;
  color: string;
}

const Logo: React.FC<IconProps> = ({ Icon, name, color }) => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    setActive(location.pathname.substr(1, location.pathname.length));
  }, [location, active, name, color]);

  const styles = {
    body: `${
      active === name
        ? "bg-blue-primary shadow-2xl"
        : "bg-white shadow shadow-lg"
    } relative group my-4 text-2xl px-12 py-4 bg-white ring-3 ring-gray-300 w-20 rounded-3xl flex flex-col items-center justify-around hover:bg-blue-primary hover:shadow-2xl cursor-pointer `,
    name: `${
      active === name ? "text-white" : "text-gray-800"
    } group-hover:text-white capitalize text-sm font-semibold mt-4`,
    icon: `${
      active === name
        ? "bg-blue-primary text-white"
        : `bg-${color}-100 text-${color}-900`
    } rounded-full p-3 group-hover:bg-blue-primary group-hover:text-white`,
    arrowRight: `${
      active === name ? "text-blue-primary" : "text-transparent"
    } absolute -right-3 text-transparent`,
    overlay: `${
      active === name ? "opacity-30 " : "opacity-0"
    } absolute bg-white w-12 h-12 rounded-full top-4 group-hover:opacity-30`,
  };

  return (
    <Link to={`/${name}`}>
      <div className={styles.body}>
        <div className={styles.overlay} />
        <div className={styles.icon}> {Icon} </div>
        <p className={styles.name}> {name} </p>
        <ArrowRight className={styles.arrowRight} />
      </div>
    </Link>
  );
};

export default Logo;
