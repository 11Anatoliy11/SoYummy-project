import css from './Background.module.css';

const Background = ({ type, children }) => {
  const bgType = css[`mainBg${type}`];

  return <div className={`${bgType}`}>{children}</div>;
  //   return <div className={`${css.mainBg} ${bgType}`}>{children}</div>;
};

export default Background;
