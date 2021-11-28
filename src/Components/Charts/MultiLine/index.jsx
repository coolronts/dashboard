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
    colors: ['#9CA3AF', '#60A5FA'],
    chart: {
      fontFamily: 'Helvetica, Arial, sans-serif',
       foreColor: '#373d3f',
      height: 100,
      type: 'line',
      zoom: {enabled: false},
      toolbar: {show: false},
      dropShadow: {enabled: true,}
     },
     legend: {
       position: 'top',
        horizontalAlign: 'right',
       fontSize: '16px',
       offset: 0
     },
    dataLabels: {enabled: false},
    stroke: { curve: 'smooth' },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          cssClass: 'apexcharts-xaxis-label',
          colors: '#9CA3AF',
          fontWeight: '600'
        }
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'dd/MMM',
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          cssClass: 'apexcharts-xaxis-label',
          colors: '#9CA3AF',
          fontWeight: '600'
        }
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
      <ReactApexChart options={options} series={series} height={250} />
    </div>

  )
}

export default MultiLine