import React from "react";
import Image from "next/image";
const ProfileInfo = ({ profileInfo }) => {
  console.log(profileInfo);
  return (
    <div className="flex flex-col justify-center items-center mt-[9rem] gap-4">
      <Image
        src={profileInfo.userImage}
        alt="profileimage"
        width={80}
        height={80}
        className="rounded-full"
      />
      <h2 className="font-semibold">{profileInfo.userName}</h2>
      <h2>{profileInfo.email}</h2>
    </div>
  );
};

export default ProfileInfo;
