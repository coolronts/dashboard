import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: 'Previous Month',
    data: [12, 2, 19, 1, 5, 9, 13]
  }, {
    name: 'Current Month',
    data: [11, 12, 15, 3, 4, 12, 4]
  }
]


const options = {
    colors: ['#9CA3AF', '#2563EB'],
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