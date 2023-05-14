import { Link } from 'react-router-dom';
import { ReactComponent as ClockIcon } from 'images/svg/clock.svg';

export const RecipeCard = ({ id, title, text, thumb, time }) => {
  const timeMeasures = ['min', 'h'];
  return (
    <Link to={`/recipes/${id}`}>
      <div >
        <img
          src={thumb}
          alt={title}
          height={323}
          width={343}
        />
        <div >
          <div >
            <p >
              {time && (
                <>
                  <ClockIcon />
                  {time}
                  {!timeMeasures.some(value => time.includes(value)) && ' min'}
                </>
              )}
            </p>
            <p>
              {text}
            </p>

          </div>
          <h3
            title={title}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
