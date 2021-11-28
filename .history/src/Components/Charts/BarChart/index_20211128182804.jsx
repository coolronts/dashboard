import ReactApexChart from "react-apexcharts";

const series = [
  {
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }
]

const options = {
    chart: {
      height: 350,
    type: 'bar',
    toolbar: {
      show: false
    }
    },
  
    plotOptions: {
      bar: {
        columnWidth: '65%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
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