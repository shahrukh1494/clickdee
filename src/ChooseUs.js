import React from "react";

const ChooseUs = () => {
  return (
    <div className="relative py-12 px-[100px] mt-12 grid grid-rows-2 grid-cols-3 gap-8">
      <div className="cursor-default relative block">
        <div className="text-blue-900 font-medium leading-[60px] text-5xl">
          Why The Industry Chooses Clickdee?
        </div>

        <div className="pt-8">
          We understand performance marketing from every angle and every stage
          of the funnel. Our clients trust that we know what metrics move their
          business towards growth. Our pulishers and affiliate partners know
          that we make maximum revenue and ROAS main focus when growing our
          partnerships.
        </div>
      </div>
      <div className="cursor-pointer px-12 pb-12 text-blue-900 text-3xl text-center">
        <div className="px-12 pb-8">
          <img src="/target.svg" alt="SVG" />
        </div>

        <div className="px-12 text-left">Choose Your Local Targeting</div>
      </div>
      <div className="cursor-pointer px-12 pb-12 text-blue-900 text-3xl text-center">
        <div className="px-12 pb-8">
          <img src="/funnel.svg" alt="SVG" />
        </div>
        <div className="px-12 text-left">Track Your Conversion</div>
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="cursor-pointer px-12 pb-12 text-blue-900 text-3xl text-center">
          <div className="px-12 pb-8">
            <img src="/colorwheel.svg" alt="SVG" />
          </div>
          <div className="px-12 text-left">Customized Campaigns</div>
        </div>
      </div>

      <div className="cursor-pointer px-12 pb-12 text-blue-900 text-3xl text-center">
        <div className="px-12 pb-8">
          <img src="/person.svg" alt="SVG" />
        </div>
        <div className="px-12 text-left">Get Dedicated Support Team</div>
      </div>
      <div className="cursor-pointer px-12 pb-12 text-blue-900 text-3xl text-center">
        <div className="px-12 pb-8">
          <img src="/assurance.svg" alt="SVG" />
        </div>
        <div className="px-12 text-left">Quality Assurance</div>
      </div>
    </div>
  );
};

export default ChooseUs;
