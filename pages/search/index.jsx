import { SearchCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Header from "../../components/Header";
import Results from "../../components/Results";
import { APIKEY, BASEURL } from "../../utils/variables";

const Search = () => {
  const [searchType, setSearchType] = useState("Movie");
  const [query, setQuery] = useState("");
  const [fetchedResult, setFetchedResult] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const searchHandler = async () => {
    try {
      setIsFetching(true);
      setFetchedResult(null);
      const res = await axios.get(
        `${BASEURL}/search/${searchType.toLowerCase()}?api_key=${APIKEY}&query=${query}`
      );
      const data = res.data;
      setFetchedResult(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <Head>
        <title>Search Movies and TV Shows / NEXTHulu</title>
      </Head>
      <Header />
      <section className="search-section p-4 md:p-8 w-full">
        <h1 className="text-5xl text-white font-bold text-center mb-8">
          Search Movies and TV Series
        </h1>
        <div className="inputs-container flex justify-center items-center w-3/4 md:w-1/2 mx-auto">
          <input
            type="radio"
            name="search"
            id="search-movie"
            className="mr-2 focus:outline-none"
            onChange={() => setSearchType("Movie")}
          />
          <label
            htmlFor="search-movie"
            value="movie"
            className="mr-8 font-semibold text-lg md:text-xl"
          >
            Movie
          </label>
          <input
            type="radio"
            name="search"
            id="search-tv"
            className="mr-2 focus:outline-none"
            onChange={() => setSearchType("TV")}
          />
          <label
            htmlFor="search-tv"
            value="tv"
            className="mr-8 font-semibold text-lg md:text-xl"
          >
            TV Series
          </label>
        </div>
        <div className="search-input w-1/2 mx-auto flex mt-4">
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none border-b-2 border-white p-2"
            placeholder={`Search ${searchType}...`}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="h-9 w-9" onClick={searchHandler}>
            <SearchCircleIcon />
          </button>
        </div>
      </section>
      {isFetching && (
        <h3 className="text-center font-semibold mt-4">Loading ....</h3>
      )}
      {fetchedResult &&
        (fetchedResult.length > 0 ? (
          <Results type={searchType.toLowerCase()} results={fetchedResult} />
        ) : (
          <h3 className="text-center font-semibold mt-4">{`No ${searchType} Found.`}</h3>
        ))}
    </>
  );
};

export default Search;
