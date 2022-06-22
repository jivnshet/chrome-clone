import React from "react";
import Image from "next/image";

const Avatar = ({ url, className }) => {
  return (
    <div
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    >
      <Image
        className="rounded-full"
        src={url}
        alt="profile picture"
        loading="lazy"
        height={60}
        width={60}
      />
    </div>
  );
};

export default Avatar;
