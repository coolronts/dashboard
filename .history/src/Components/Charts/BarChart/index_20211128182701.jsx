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
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
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
    xaxis: {
      categories: [
        ['John', 'Doe'],
        ['Joe', 'Smith'],
        ['Jake', 'Williams'],
        'Amber',
        ['Peter', 'Brown'],
        ['Mary', 'Evans'],
        ['David', 'Wilson'],
        ['Lily', 'Roberts'], 
      ],
      labels: {
        style: {
          colors: ['#fff'],
          fontSize: '12px'
        }
      }
    }
  }
    
const BarChart = () => {
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>


  )
}

export default BarChart