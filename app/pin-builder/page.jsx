"use client";
import { app } from "@/components/firebase/firebaseconfig";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import ProfileInfoRoute from "@/components/profileinfo-route/profileinfo-route";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
const PinBuilder = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [link, setLink] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const storage = getStorage(app);
  const router = useRouter();
  const db = getFirestore(app);

  const postId = Date.now().toString();
  const onSave = () => {
    // console.log("Title:", title, "Desc:", desc, "Link:", link);
    // console.log("File:", file);
    setLoading(true);
    uploadFile();
  };

  const uploadFile = () => {
    const storageRef = ref(storage, "pinterest/" + file?.name);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("file Uploaded");
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (url) => {
          console.log("downloadurl", url);
          const postData = {
            title: title,
            desc: desc,
            link: link,
            image: url,
            userName: session.user.name,
            email: session.user.email,
            userImage: session.user.image,
            id: postId,
          };
          await setDoc(doc(db, "pinterest", postId), postData).then((resp) => {
            console.log("saved");
            setLoading(true);
            router.push("/" + session.user.email);
          });
        });
      });
  };
  return (
    <div className="flex justify-center items-center gap-[5rem] mt-[5rem]">
      <div className="bg-gray-600 p-5 rounded-sm">
        <ProfileInfoRoute />
      </div>
      <div className="flex flex-col gap-7">
        <button
          className="bg-orange-500 text-white p-2 w-[5rem] ml-[11rem] px-5 rounded-md"
          onClick={() => onSave()}
        >
          {loading ? (
            <Image
              src="/Loading_icon.gif"
              width={100}
              height={50}
              alt="loading"
            />
          ) : (
            <span>Save</span>
          )}
        </button>
        <div className="flex flex-col">
          <label className="font-semibold ">Add Your Title</label>
          <textarea
            className="bg-gray-300 w-[18rem] border-none rounded-md"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">
            Tell everyone What Your Pin is About
          </label>
          <textarea
            className="bg-gray-300 w-[18rem] border-none rounded-md"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Add a Destination Link</label>
          <textarea
            className="bg-gray-300 w-[18rem] border-none rounded-md"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="flex flex-col ">
          <label className="font-semibold">Choose File</label>
          <input
            type="file"
            placeholder="Upload a File"
            className="border-2 w-[18rem] rounded-md"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
    </div>
  );
};

export default PinBuilder;
