interface NotificationProps{
  Icon: React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({ Icon }) => {
  const styles = {
    icon: "text-2xl font-bold p-3 bg-white"
  }
  return (
    <>
      <div className={styles.icon}>{Icon}</div>
    </>
  )
}
