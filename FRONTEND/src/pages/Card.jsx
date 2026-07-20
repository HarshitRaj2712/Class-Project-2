import React from "react";

const Card = ({
  title,
  instructor,
  price,
  duration,
  level,
  image,
}) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg p-5 m-4 hover:shadow-xl transition duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

      <h2 className="text-2xl font-bold capitalize mb-2">
        {title}
      </h2>

      <h3 className="text-gray-600 mb-3">
        Instructor: {instructor}
      </h3>

      <div className="flex justify-between mb-3">
        <p className="font-semibold">
          ₹{price}
        </p>

        <p className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
          {level}
        </p>
      </div>

      <p className="text-gray-500 mb-4">
        Duration: {duration}
      </p>

      

    </div>
  );
};

export default Card;