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
  chart: {
    
  },
  xaxis: {
    labels: {
        format: 'MMM',
      },
      categories: ["1 May", "2 May", "3 May","4 May","5 May","6 May","7 May"]
    
  }
}

const MultiLine: React.FC = () => {
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>

  )
}

export default MultiLine