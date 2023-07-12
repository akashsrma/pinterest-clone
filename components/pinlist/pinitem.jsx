import React from "react";
import Image from "next/image";

const Pinitem = ({ pin }) => {
  const { title, id, image, desc, link, userImage, email, userName } = pin;
  return (
    <div className=" hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-500 px-2 py-4 rounded-md">
      <div className="rounded-lg items-center flex  justify-center">
        <Image src={image} alt={title} width={400} height={400} />
      </div>
      <div className="text-[18px] ">
        <h2 className="ml-[11rem] font-semibold text-[21px]">{title}</h2>
        <h2 className="p-3">
          Desc: <span>{desc}</span>
        </h2>
      </div>
      <div className="flex gap-3 ">
        <p>
          <Image
            src={userImage}
            alt="userimage"
            width={50}
            height={50}
            className="rounded-full"
          />
        </p>
        <div>
          <h3 className="text-[18px]">{userName}</h3>
          <h4 className="text-[18px]">{email}</h4>
        </div>
      </div>
    </div>
  );
};

export default Pinitem;
