import React from "react";
import { useDispatch } from "react-redux";
import { isInfoChange } from "../utils/moviesSlice";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();

  const isHandleInfo = () => {
    dispatch(isInfoChange());
  };
  return (
    <div className="w-screen aspect-video pt-[20%] px-4 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-xl md:text-6xl font-netflixSansBold text-white">
        {title}
      </h2>
      <p className="hidden md:block sm:w-1/4 md:w-1/2 pt-5">{overview}</p>

      <div className="flex pt-2 md:p-0 md:pt-4 ">
        <button className="font-semibold justify-center items-center hover:bg-opacity-80 px-2 md:px-4 py-2 rounded bg-white text-black  w-[100px] min-w-[100px] md:flex">
          <Link to={`/watch/?name=${encodeURIComponent(title)}`}>▶️Play</Link>
        </button>
        <button
          className="font-semibold justify-center items-center hover:bg-opacity-80 px-2 md:px-4 py-2 ml-2 rounded bg-gray-400 bg-opacity-30 text-white w-[100px] min-w-[100px] md:flex"
          onClick={isHandleInfo}
        >
          ℹ️Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;

