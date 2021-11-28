import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import Map from '../../../Components/Map'

const sale = [
  {
    country:'Norway',
    country_code: 'NO',
    sale: 1245
  },
  {
    country: 'USA',
    country_code: 'US',
    sale: 1431
  },
  {
    country: 'Bangladesh',
    country_code: 'BD',
    sale: 9992
  },
  {
    country: 'UK',
    country_code: 'UK',
    sale: 5145
  },
  {
    country: 'France',
    country_code: 'FR',
    sale: 8132
  },
]
const data = sale.sort((a, b) => (a.sale > b.sale) ? -1 : ((b.sale > a.sale) ? 1 : 0))
const sum = data.reduce((a, b) => a + b.sale, 0)

const CountrySales: React.FC = () => {
  const styles = {
    table: `bg-white w-full divide-solid divide-y-2 divide-opacity-60 divide-gray-300 text-gray-700`,
    row: `flex py-3 text-sm items-center font-semibold font-sans tracking-tight py-2 justify-between`
  }
  return(
    <div className="my-6">
      <Card Element={
        <div className="mb-4 font-semibold font-sans capitalize">
          <div className="px-6 mb-3">
            <div className="flex justify-between text-md text-gray-400 pt-1 items-center">
              <CardHeader title="Sales by Country" subtitle="Current month" />
            </div>
            <Map />
            <div className={styles.table}>
            {data.map((item, i) => (
              <div className={styles.row} key={i}>
                <p className="w-1/3">{item.country}</p>
                <div className="w-full text-center  bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${(item.sale/sum)*100}%`}}></div>
                </div>
                <p className="text-gray-400 w-1/3  text-right">Nok {item.sale}</p> 
              </div>
            ))}
        </div>
            
          </div>
        </div>
      }/>
    </div>
  )
}

export default CountrySales