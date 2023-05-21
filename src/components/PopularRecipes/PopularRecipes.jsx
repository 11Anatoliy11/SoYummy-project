import { Link } from 'react-router-dom';

export const PopularRecipes = ({ data }) => {
  return (
    <div>
      <h2>
        Popular recipe
      </h2>
      <div>
        {data.map(({ _id, title, description, thumb }) => (
          <div
            key={_id}
          >
            <Link to={`/recipes/${_id}`}>
              <img
                src={thumb}
                alt={title}
              />
              <div>
                <p>
                  {title}
                </p>
                <p>
                  {description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
