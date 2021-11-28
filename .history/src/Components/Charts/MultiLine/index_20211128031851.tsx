import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: 'Exam',
    data: [31, 40, 28, 51, 42, 10, 100]
  }, {
    name: 'Assignment',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]


const options = {
    colors: ['#34D399', '#6D28D9'],
    chart: {
      height: 350,
     },
     
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    
    tooltip: {
      x: {
        format: 'MMM'
      },
    },
  }

const MultiLine: React.FC = () => {
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>

  )
}

export default MultiLine