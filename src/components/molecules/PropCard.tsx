const PropCard = (props: Props) => {
  const { title, value, type } = props;
  return (
    <div
      className={`flex flex-col ${
        type === 'Primary' ? 'bg-indigo-50' : 'bg-white'
      } p-3 rounded-xl`}
    >
      <span className={'font-title text-blue-600'}>{title}</span>
      <span className="font-poppins">{value}</span>
    </div>
  );
};
type Props = {
  title: string;
  value: string;
  type: 'Primary' | 'Secondary';
};

export default PropCard;
