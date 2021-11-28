interface props {
  title: string;
  subtitle: string;
}

const CardHeader: React.FC<props> = ({ title, subtitle }) => {
  return (
    <div className="font-semibold font-sans">
      <p className="tracking-tighter text-xl text-gray-700 capitalize">{title}</p>
      <p className="text-md text-gray-400">{subtitle}</p>
    </div>
  )
}

export default CardHeader