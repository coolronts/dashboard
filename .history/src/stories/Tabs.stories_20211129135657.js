import Tabs from "../Components/Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};

export const NormalTabs = () => (
  <Tabs options={["Yes", "No", "Maybe"]}>
    <p className="bg-white shadow px-5 py-2">Yes is Clicked!</p>
    <p className="bg-white shadow px-5 py-2">No is Clicked!</p>
    <p className="bg-white shadow px-5 py-2">Maybe is Clicked!</p>
  </Tabs>
);
export const BoxTabs = () => (
  <Tabs options={["Yes", "No", "Maybe"]} isBox={true}>
    <p className="bg-white shadow px-5 py-2">Yes is Clicked!</p>
    <p className="bg-white shadow px-5 py-2">No is Clicked!</p>
    <p className="bg-white shadow px-5 py-2">Maybe is Clicked!</p>
  </Tabs>
);
