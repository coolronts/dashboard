import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: 'Previous Month',
    data: [31, 40, 28, 51, 42, 10, 100]
  }, {
    name: 'Current Month',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]


const options = {
    colors: ['#1F2937', '#2563EB'],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
      }
     },
     legend: {
       position: 'top',
        horizontalAlign: 'right',
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
        format: 'dd/MMM',
      },
      categories: ["2018-01-19", "2018-01-20", "2018-01-21", "2018-01-22", "2018-01-23", "2018-01-24","2018-01-25"]
    },
    tooltip: {
      x: {
        format: 'dd/MM'
      },
    },
  }

const MultiLine = () => {
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} />
    </div>

  )
}

export default MultiLine