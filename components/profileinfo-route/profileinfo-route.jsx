"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
const ProfileInfoRoute = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <Image
            src={session?.user.image}
            alt="profileimage"
            width={50}
            height={50}
            className="rounded-full ml-[5rem]"
          />
          <div>
            <h2 className="font-semibold text-white ml-[3rem]">
              {session?.user.name}
            </h2>
            <h2 className="text-white">{session?.user.email}</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileInfoRoute;
