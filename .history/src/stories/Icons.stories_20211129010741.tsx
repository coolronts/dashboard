import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clients,
  CompanyLogo,
  Notifications,
  Overview,
  Search,
  Services,
  Settings,
  Staff,
} from "../Components/Icons";

export default {
  title: "Icons",
  component: Overview,
  Notifications,
  Calendar,
  Clients,
  Staff,
  Services,
  Settings,
  ArrowRight,
  CompanyLogo,
  Search,
  ArrowUpRight,
};

export const Icons = () => (
  <div className="w-full flex justify-between">
    <Overview className="mr-1" />
    <Calendar className="mr-1" />
    <Clients className="mr-1" />
    <Staff className="mr-1" />
    <Services className="mr-1" />
    <Settings className="mr-1" />
    <Notifications className="mr-1" />
    <CompanyLogo className="mr-1" />
    <Search className="mr-1" />
    <ArrowUpRight className="mr-1" />
    <ArrowRight className="mr-1" />
  </div>
);
