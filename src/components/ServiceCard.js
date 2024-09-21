import React from "react";

function ServiceCard({ item }) {
  const { image, icons, title } = item;

  return (
    <div className="flex-col box relative mb-3 ">
      <div className="head-image">
        <img
          src={`${image}`}
          alt={title}
          height={200}
          width={300}
          className=" rounded-2xl"
        />
      </div>
      <div className="text-on-image absolute bottom-5 left-3">
        <p className="text-white font-bold uppercase text-xl">{title} </p>
        <img src={icons} alt={`${title} icon`} className="w-10 h-10" />
      </div>
    </div>
  );
}

export default ServiceCard;
