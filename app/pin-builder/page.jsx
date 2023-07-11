"use client";
import ProfileInfoRoute from "@/components/profileinfo-route/profileinfo-route";
import { useSession } from "next-auth/react";
import { useState } from "react";
const PinBuilder = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [link, setLink] = useState();
  const [file, setFile] = useState();

  const onSave = () => {
    console.log("Title:", title, "Desc:", desc, "Link:", link);
    console.log("File:", file);
  };

  const uploadFile = () => {};

  return (
    <div className="flex justify-center items-center gap-[5rem] mt-[7rem]">
      <div className="bg-gray-600 p-5 rounded-sm">
        <ProfileInfoRoute />
      </div>
      <div className="flex flex-col gap-7">
        <button
          className="bg-orange-500 text-white p-2 w-[5rem] ml-[11rem] px-5 rounded-md"
          onClick={() => onSave()}
        >
          Save
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
          <label className="font-semibold">Add a estination Link</label>
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
