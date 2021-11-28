import ReactApexChart from "react-apexcharts";

const series = [
  {
    data: [21, 22, 10, 28]
  }
]


    
const BarChart = ({ width, color = '#F59E0B' }) => {
  const options =
{
  colors: [color],
  chart: {
    height: 50,
    type: 'bar',
    toolbar: {show: false}
  },
  plotOptions: {
    bar: {
      columnWidth: '80%',
      distributed: false,
    }
  },
  dataLabels: {enabled: false},
  legend: {show: false},
  xaxis: {
    labels: {show: false}
  },
  yaxis: {
    labels: {show: false}
  },  
}
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" width={width} height={130} />
    </div>


  )
}

export default BarChart