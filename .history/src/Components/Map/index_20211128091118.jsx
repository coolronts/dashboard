import { Data, WorldMap } from "react-svg-worldmap"

const data =
    [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
      { country: "mx", value: 127318112 },   // mexico
      { country: "au", value: 127318112 }   // mexico
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