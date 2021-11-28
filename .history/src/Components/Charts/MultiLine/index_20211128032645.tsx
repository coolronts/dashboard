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
    type: 'linear'
  },
  xaxis: {
    categories: [1-6, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
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