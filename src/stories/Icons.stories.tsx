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

import { RoundIcon } from "../Components/Buttons";

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

export const Icons = () => {
  return (
    <div className="w-full flex justify-between flex-wrap">
      <RoundIcon Icon={<Overview />} />
      <RoundIcon Icon={<Calendar />} />
      <RoundIcon Icon={<Clients />} />
      <RoundIcon Icon={<Staff />} />
      <RoundIcon Icon={<Services />} />
      <RoundIcon Icon={<Settings />} />
      <RoundIcon Icon={<Search />} />
      <RoundIcon Icon={<Notifications />} />
      <RoundIcon Icon={<CompanyLogo />} />
      <RoundIcon Icon={<ArrowUpRight />} />
    </div>
  );
};
