import React from "react";

const Screen = () => {
  return (
    <>
      {" "}
      <div className="flex gap-2">
      <div>
        <p className="border-2 px-1 text-xs font-bold  bg-black text-white rounded-full">1</p>
      </div>
      <div className="w-40 h-72 shadow-inner shadow-gray-600 rounded-xl border-gray-900 border-8 bg-blue-gray-50">
        {/* Your phone screen content goes here */}
        <div className="p-4">
          {/* Phone screen content */}
          <p className="text-xl font-semibold mb-2">1xbet</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Additional content can be added as needed */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Screen;
