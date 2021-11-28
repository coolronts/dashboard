interface NotificationProps{
  Icon: React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({ Icon }) => {
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


export const Primary: React.FC<PrimaryProps> = ({ name }) => {
  const styles = {
    name: "ring-2 ring-blue-900 text-2xl font-bold p-2 bg-blue-500 rounded-full mx-6 shadow text-white cursor-pointer hover:shadow-2xl"
  }
  return (
    <>
      <p className={styles.name}>{name}</p>
    </>
  )
}

