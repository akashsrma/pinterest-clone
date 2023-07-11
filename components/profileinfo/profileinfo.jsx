import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const ProfileInfo = ({ profileInfo }) => {
  console.log(profileInfo);
  const router = useRouter();
  const { data: session } = useSession();
  const onLogoutClick = () => {
    signOut();
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[5rem] gap-4">
      <Image
        src={profileInfo.userImage}
        alt="profileimage"
        width={80}
        height={80}
        className="rounded-full"
      />
      <h2 className="font-semibold">{profileInfo.userName}</h2>
      <h2>{profileInfo.email}</h2>
      {session?.user.email == profileInfo.email ? (
        <button
          className="font-semibold text-red-600 mt-4"
          onClick={() => onLogoutClick()}
        >
          LogOut
        </button>
      ) : (
        router.push("/")
      )}
    </div>
  );
};

export default ProfileInfo;
