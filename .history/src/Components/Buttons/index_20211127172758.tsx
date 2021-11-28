interface NotificationProps{
  Icon: React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({ Icon }) => {
  const styles = {
    icon: "text-2xl font-bold p-2 bg-white rounded-full mx-2 shadow text-gray-400 cursor-pointer hover:shadow-2xl"
  }
  return (
    <>
      <div className={styles.icon}>{Icon}</div>
    </>
  )
}
