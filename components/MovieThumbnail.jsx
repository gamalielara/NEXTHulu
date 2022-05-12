import React from "react";
import Image from "next/dist/client/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { IMAGEURL } from "../utils/variables";
import Link from "next/link";

const MovieThumbnail = ({ result, type }) => {
  return (
    <div className="movie-thumbnail-container relative group hover:cursor-pointer md:m-4 m-2 rounded bg-gray-500">
      <div className="details absolute w-full z-10 bottom-0 left-0 p-4 bg-gradient-to-t from-black group-hover:opacity-100 opacity-0 transition-all">
        <h2 className="text-lg md:text-xl font-bold">
          <Link
            href={`/${
              result.media_type
                ? result.media_type === "movie"
                  ? "movie"
                  : "tv"
                : type
            }/${result.id}`}
          >
            {result.title || result.name || result.original_name}
          </Link>
        </h2>
        <p className="text-sm overflow-hidden" style={{ maxHeight: "7em" }}>
          {result.overview}
        </p>
        <p className="flex items-center">
          <ThumbUpIcon className="h-5" /> {result.vote_count}
        </p>
      </div>
      <Image
        layout="responsive"
        src={`${IMAGEURL}${result.poster_path}`}
        alt={""}
        width={800}
        height={1200}
        className="rounded"
      />
    </div>
  );
};

export default MovieThumbnail;
