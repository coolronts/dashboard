import ReactApexChart from "react-apexcharts";

const series = [
  {
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }
],

const options = {
    colors: ['#9CA3AF', '#60A5FA'],
    chart: {
      fontFamily: 'Helvetica, Arial, sans-serif',
       foreColor: '#373d3f',
      height: 100,
      type: 'bar',
      zoom: {enabled: false},
      toolbar: {show: false},
      dropShadow: {enabled: true,}
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },

     legend: {
       position: 'top',
        horizontalAlign: 'right',
       fontSize: '16px',
       offset: 0
     },
    options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              yaxis: {
                title: {
                  text: '$ (thousands)'
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return "$ " + val + " thousands"
                  }
                }
              }
            },

    
  }
  

const BarChart = () => {
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>


  )
}

export default MultiColumn