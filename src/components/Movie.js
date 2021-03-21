
const Movie = ({title, actor}) => {
    return (
      <>
      {title?.length > 0 ? <p>Film: {title} || Medvirkende: {actor}</p> : null}
      </>
    );
  };
  
  export default Movie;