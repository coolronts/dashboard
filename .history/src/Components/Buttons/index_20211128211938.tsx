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
    name: "ring-2 ring-gray-300 text-2xl font-bold p-2 bg-blue-primary rounded-full mx-6 shadow text-gray-400 cursor-pointer hover:shadow-2xl"
  }
  return (
    <>
      <p className={styles.name}>{name}</p>
    </>
  )
}

