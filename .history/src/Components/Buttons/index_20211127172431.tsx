interface NotificationProps{
  Icon: React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({ Icon }) => {
  const styles = {
    icon: "text-2xl"
  }
  return (
    <>
      <div className={styles.icon}>{Icon}</div>
    </>
  )
}
