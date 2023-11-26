import React from "react";

const Plans = () => {
  return (
    <div className="space-y-4 font-sans">
      <div className="flex flex-col items-center space-y-2 w-full">
        <p>INVESTMENT PLANS</p>
        <h1 className="text-lg font-semibold max-w-md text-center">
          We provide you with the greatest investment plans available.
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-5 md:p-10">1</div>
        <div className="p-5 md:p-10">1</div>
        <div className="p-5 md:p-10">1</div>
        <div className="p-5 md:p-10">1</div>
        <div className="p-5 md:p-10">1</div>
        <div className="p-5 md:p-10">1</div>
      </div>
    </div>
  );
};

export default Plans;
