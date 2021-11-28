import { Data, WorldMap } from "react-svg-worldmap"

const data =
    [
      { country: "NO", value: 1389, color:"green" }, // china
      { country: "CN", value: 1311}, // india
      { country: "US", value: 3318 },  // united states
      { country: "SP", value: 2649 },  // indonesia
      { country: "Bangladesh", value: 2107 },  // pakistan
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
      fill: countryCode === 'NO' ? 'blue' : countryCode === 'US'? 'green': color,
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