import React from "react";

function SocialMediaIcons({ title, icon, type, link }) {
  return (

    //  custome reusable button code which is used to navigate new url with tab changing
    <button
      type={type && type}
      className="w-fit text-white flex justify-center    hover:text-red-600 items-center gap-2  font-bold text-[14px] px-2 text-center  py-2 h-fit font-sans transition-all duration-500  hover:bg-opacity-80 rounded-full"
    >
      <span className="text-white font-bold">{title && title}</span>
      <a href={link} target="_blank">
        {icon && icon}
      </a>
    </button>
  );
}

export default SocialMediaIcons;
