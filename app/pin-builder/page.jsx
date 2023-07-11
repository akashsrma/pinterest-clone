import ProfileInfoRoute from "@/components/profileinfo-route/profileinfo-route";

const PinBuilder = () => {
  return (
    <div className="flex justify-center items-center gap-[5rem] mt-[5rem]">
      <div className="bg-gray-600 p-5 rounded-sm">
        <ProfileInfoRoute />
      </div>
      <div className="flex flex-col gap-7">
        <p className="bg-orange-500 text-white p-2 w-[5rem] ml-[11rem] px-5 rounded-md">
          Save
        </p>
        <div className="flex flex-col">
          <label className="font-semibold ">Add Your Title</label>
          <textarea className="bg-gray-300 w-[18rem] border-none rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">
            Tell everyone What Your Pin is About
          </label>
          <textarea className="bg-gray-300 w-[18rem] border-none rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Add a estination Link</label>
          <textarea className="bg-gray-300 w-[18rem] border-none rounded-md" />
        </div>

        <div className="flex flex-col ">
          <label className="font-semibold">Choose File</label>
          <input
            type="file"
            placeholder="Upload a File"
            className="border-2 w-[18rem] rounded-md"
            name="file"
          />
        </div>
      </div>
    </div>
  );
};

export default PinBuilder;
