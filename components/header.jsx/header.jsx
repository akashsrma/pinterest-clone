"use client";
import Image from "next/image";
import { HiSearch, Hibell, Hichat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { app } from "@/components/firebase/firebaseconfig";
import { useRouter } from "next/navigation";
const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(session);
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);
  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  };

  const onCreateClick = () => {
    if (session) {
      router.push("/pin-builder");
    } else {
      signIn();
    }
  };
  return (
    <div className="flex">
      <div className="flex  items-center text-black">
        <Image
          src="/pinterest.png"
          alt="pinterest"
          width={70}
          height={70}
          onClick={() => router.push("/")}
          className="hover:bg-gray-400 p-2 rounded-full cursor-pointer"
        />
        <h2 className="font-semibold text-[21px]">Pinterest</h2>
      </div>
      <div className="flex ml-[18rem]">
        <div className="flex flex-row gap-5  px-6 items-center ">
          <button className="bg-black text-white  hover:bg-white hover:text-black hover:font-semibold hover:cursor-pointer rounded-md px-7 py-2">
            Home
          </button>
          <button
            className="bg-black text-white hover:bg-white hover:text-black hover:font-semibold hover:cursor-pointer  rounded-md px-7 py-2"
            onClick={() => onCreateClick()}
          >
            Create
          </button>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex bg-gray-200 p-2 gap-3 items-center rounded-md">
            <HiSearch className="text-[25px]" />

            <input
              type="text"
              placeholder="search"
              className="bg-transparent outline-none w-[25rem] "
            />
          </div>

          {session?.user ? (
            <Image
              onClick={() => router.push("/" + session.user.email)}
              src={session?.user?.image}
              alt="men"
              width={60}
              height={60}
              className="rounded-full"
            />
          ) : (
            <button
              className="font-semibold p-2 bg-black text-white rounded-md  hover:bg-gray-700"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
