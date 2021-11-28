interface NotificationProps{
  Icon: React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({ Icon }) => {
  return (
    <>
      <div className="text-4xl">{Icon}</div>
      Hello
    </>
  )
}
