import { Data, WorldMap } from "react-svg-worldmap"

const data =
    [
      { country: "cn", value: 1389 }, // china
      { country: "in", value: 1311}, // india
      { country: "us", value: 3318 },  // united states
      { country: "id", value: 2649 },  // indonesia
      { country: "pk", value: 2107 },  // pakistan
      { country: "br", value: 2103 },  // brazil
      { country: "ng", value: 2082 },  // nigeria
      { country: "bd", value: 1610 },  // bangladesh
      { country: "ru", value: 1419 },  // russia
      { country: "mx", value: 1273 },   // mexico
      { country: "au", value: 1273 }   // mexico
    ]
const Map = () => {
  const stylingFunction = ({
  countryValue,
  countryCode,
  minValue,
  maxValue,
  color,
}) => {
  const opacityLevel = countryValue
    ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
    : 0;
  return {
    fill: countryCode === 'AU' ? 'blue' : color,
    fillOpacity: opacityLevel,
    stroke: 'green',
    strokeWidth: 1,
    strokeOpacity: 0.2,
    cursor: 'pointer',
  };
};


  return (
    <div>
      <WorldMap color="red" value-suffix="nok" size="md" data={data} styleFunction={stylingFunction}  />
    </div>
  )
}

export default Map