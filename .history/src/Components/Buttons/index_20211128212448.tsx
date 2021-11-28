interface NotificationProps{
  Icon: React.ReactNode;
}

const Notification: React.FC<NotificationProps> = ({ Icon }) => {
  const styles = {
    icon: "ring-2 ring-gray-300 text-2xl font-bold p-2 bg-white rounded-full mx-6 shadow text-gray-400 cursor-pointer hover:shadow-2xl"
  }
  return (
    <>
      <div className={styles.icon}>{Icon}</div>
    </>
  )
}

interface PrimaryProps{
  name:string
}


const Primary: React.FC<PrimaryProps> = ({ name }) => {
  const styles = {
    name: "text-lg font-semibold px-6 py-2 bg-blue-500 rounded-xl mx-6 shadow text-white cursor-pointer hover:shadow-2xl"
  }
  return (
    <>
      <p className={styles.name}>{name}</p>
    </>
  )
}

export {Primary, Notification}
