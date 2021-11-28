import Card from '../../../Components/Card'
import CardHeader from '../../../Components/CardHeader'
import Map from '../../../Components/Map'

const sale = [
  {
    country: 'NO',
    sale: 1245
  },
  {
    country: 'US',
    sale: 1431
  },
  {
    country: 'BD',
    sale: 9992
  },
  {
    country: 'UK',
    sale: 5145
  },
  {
    country: 'FR',
    sale: 8132
  },
]

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
            {sale.map((item, i) => (
              <div className={styles.row} key={i}>
                  <p>{item.country}</p>  
                  <p>Nok {item.sale}</p> 
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