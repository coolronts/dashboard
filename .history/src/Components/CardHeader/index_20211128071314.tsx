interface props {
  title: string;
  subtitle: string;
}

const CardHeader: React.FC<props> = ({ title, subtitle }) => {
  return (
    <div>
      <p className="tracking-tighter text-xl text-gray-700">{title}</p>
      <p>{subtitle}</p>
    </div>
  )
}

export default CardHeader