import ReactApexChart from "react-apexcharts";

const series = [
  {
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }
]

const options =
{
  colors: ['#D97706'],
  chart: {
    height: 350,
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
    
const BarChart = () => {
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>


  )
}

export default BarChart