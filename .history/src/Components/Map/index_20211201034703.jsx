import { WorldMap } from "react-svg-worldmap"

const data =
    [
      { country: "NO", value: 1389, color:"green" },
      { country: "CN", value: 1311}, 
      { country: "US", value: 3318 },  
      { country: "SP", value: 2649 }, 
      { country: "BD", value: 2107 },  
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
      fill: countryCode === 'NO' ? 'blue' : countryCode === 'US'? 'green': countryCode === 'BD'? 'red': color,
      fillOpacity: opacityLevel,
      stroke: 'green',
      strokeWidth: 1,
      strokeOpacity: 0.9,
      cursor: 'pointer',
    };
};

  return (
    <div>
      <WorldMap color="red" value-suffix="nok" size="xl" data={data} styleFunction={stylingFunction}  />
    </div>
  )
}

export default Map