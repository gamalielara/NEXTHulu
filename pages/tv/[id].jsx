import React from "react";
import Header from "../../components/Header";
import Image from "next/image";
import { IMAGEURL, BASEURL, MYLOADER, APIKEY } from "../../utils/variables";
import Head from "next/head";
import axios from "axios";

const TVShowPreview = ({
  name,
  backdrop,
  poster,
  genres,
  desc,
  rate,
  seasons,
  episodes,
}) => {
  console.log();
  return (
    <>
      <Head>
        <title>{name} / NEXTHulu</title>
      </Head>
      <div className="fixed top-0 left-0 z-10 w-screen bg-gradient-to-b from-black/[.7]">
        <Header />
      </div>
      <section className="h-screen w-screen relative">
        <div className="movie-details absolute top-1/3 sm:top-1/4 left-0 lg:left-4 w-full lg:w-2/3 h-1/2 z-20 flex align-center lg:pl-8 md:px-2">
          <div className="poster-image relative w-2/3 h-full rounded-lg hidden md:block">
            <Image
              src={`${IMAGEURL}/${poster}`}
              loader={MYLOADER}
              alt={name}
              objectFit="contain"
              layout="fill"
              className="rounded-lg z-10"
            />
          </div>
          <div className="details ml-4 flex flex-col h-full items-start justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {name}
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-white">
              {genres.length > 0 &&
                genres.map((genre) => (
                  <span key={genre.id} className="mx-2 first:ml-0 text-base">
                    {genre.name}
                  </span>
                ))}
            </h2>
            <h3 className="text-base md:text-lg font-bold my-1">
              Rating: {rate} stars • {seasons && `${seasons} Seasons`} •{" "}
              {episodes && `${episodes} Episodes`}
            </h3>
            <p className="text-sm md:text-base">{desc}</p>
            <div className="buttons mt-4">
              <button className="hover:bg-white hover:text-black px-4 py-2 rounded font-semibold border-white border-2 transition-all mr-2">
                Play Now
              </button>
              <button className="hover:bg-white hover:text-black px-4 py-2 rounded font-semibold border-white border-2 transition-all ml-2">
                Add To My List
              </button>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen bg-black/[.5]"></div>
        <Image
          layout="fill"
          objectFit="cover"
          alt="Moon Knight"
          src={`${IMAGEURL}/${backdrop}`}
          loader={MYLOADER}
          className="-z-10"
        />
      </section>
    </>
  );
};

export default TVShowPreview;

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  try {
    const res = await axios.get(`${BASEURL}/tv/${id}?api_key=${APIKEY}`);
    const movie = res.data;
    return {
      props: {
        name: movie.name,
        backdrop: movie.backdrop_path,
        poster: movie.poster_path,
        genres: movie.genres,
        desc: movie.overview,
        rate: movie.vote_average,
        seasons: movie.number_of_seasons || null,
        episodes: movie.number_of_episodes || null,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
