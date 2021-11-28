import ReactApexChart from "react-apexcharts";

const series = [
  {
    data: [21, 22, 10, 28]
  }
]

const options =
{
  colors: ['#F59E0B'],
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
    
const BarChart = ({width, color}) => {
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" width={width} height={130} color={color}/>
    </div>


  )
}

export default BarChart