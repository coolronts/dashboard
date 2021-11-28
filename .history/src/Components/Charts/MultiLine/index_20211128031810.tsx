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
    
     legend: {
       position: 'top',
       fontSize: '16px',
       offset: 0
     },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM',
      },
      categories: ["2018-01-19T00:00:00.000Z", "2018-02-19T01:30:00.000Z", "2018-03-19T02:30:00.000Z", "2018-04-19T03:30:00.000Z", "2018-05-19T04:30:00.000Z", "2018-06-19T05:30:00.000Z", "2018-07-19T06:30:00.000Z"]
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