import React from "react";
import MovieThumbnail from "./MovieThumbnail";

const Results = ({ results, type }) => {
  return (
    <section className="movie-result px-4 my-10 sm:grid md:grid-cols-2 lg:grid-cols-5 3xl:flex flex-wrap justify-center">
      {results.map((res) => (
        <MovieThumbnail key={res.id} result={res} type={type} />
      ))}
    </section>
  );
};

export default Results;
