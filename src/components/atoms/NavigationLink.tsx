import { NavLink } from 'react-router-dom';
const NavigationLink = (props: Props) => {
  const { path, value } = props;

  const activeClassName = '';
  return (
    <NavLink
      to={path}
      className={(isActive) =>
        isActive
          ? 'text-white font-title hover:text-indigo-400'
          : 'text-indigo font-title'
      }
    >
      {value}
    </NavLink>
  );
};
type Props = {
  path: string;
  value: string;
};
export default NavigationLink;
