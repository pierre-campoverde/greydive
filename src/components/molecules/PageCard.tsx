import React from 'react';
import { Link } from 'react-router-dom';
const PageCard = (props: Props) => {
  const { client, plataforma } = props;
  return (
    <Link
      to={client}
      className="flex flex-col bg-indigo-50 p-10 border-2 m-5 rounded-xl md:w-3/12 hover:border-blue-600"
    >
      <span className="text-xl font-title font-bold text-blue-600">
        {client.toUpperCase()}
      </span>
      <span className="">{plataforma}</span>
    </Link>
  );
};
type Props = {
  client: string;
  plataforma: string;
};
export default PageCard;
