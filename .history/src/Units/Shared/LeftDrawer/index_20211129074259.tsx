import {
  Calendar,
  Clients,
  Overview,
  Services,
  Settings,
  Staff,
} from "../../../Components/Icons";

import { CompanyLogo } from "../../../Components/Icons";
import Logo from "../../../Components/Logo";

const LeftDrawer: React.FC = () => {
  const styles = {
    CompanyLogo: "text-5xl text-blue-900 w-full mb-12",
    menu: "flex flex-col justify-between bg-blue.primary overflow-y-auto",
  };
  const icons = [
    { Icon: <Overview />, name: "overview", color: "blue" },
    { Icon: <Calendar />, name: "calendar", color: "green" },
    { Icon: <Clients />, name: "clients", color: "indigo" },
    { Icon: <Staff />, name: "staff", color: "red" },
    { Icon: <Services />, name: "services", color: "purple" },
    { Icon: <Settings />, name: "settings", color: "gray" },
  ];

  return (
    <div className="m-auto">
      <CompanyLogo className={styles.CompanyLogo} />
      <div className={styles.menu}>
        {icons.map((icon) => (
          <Logo
            Icon={icon.Icon}
            name={icon.name}
            color={icon.color}
            key={icon.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftDrawer;
