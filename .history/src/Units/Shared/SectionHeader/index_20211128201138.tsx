import { useEffect, useState } from 'react'

import Avatar from '../../../Components/Avatar'
import {Notification} from '../../../Components/Buttons'
import {Notifications} from '../../../Components/Icons'
import TextBox from '../../../Components/TextBox'
import { useLocation } from 'react-router-dom'

const SectionHeader: React.FC = () => {
  const styles = {
    body: "flex justify-between mt-12",
    heading: "text-3xl text-gray-800 font-bold capitalize",
    leftComponent: "flex items-center justify-around"
  }
  const location = useLocation()

  const [header,setHeader] = useState<string>("")

  useEffect(() => {
    setHeader(location.pathname.substr(1, location.pathname.length))
    console.log(location)
  }, [location,header])
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.heading}>{header}</h1>
        <div className={styles.leftComponent}>
          <TextBox />
          <Notification Icon={<Notifications />} />
          <Avatar />
        </div>
      </div>
      <hr className="bg-gray-300 h-1 my-3" />
    </>
  )
}

export default SectionHeader