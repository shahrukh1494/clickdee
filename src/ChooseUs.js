import React from "react";

const ChooseUs = () => {
  return (
    <div className="relative py-12 px-[100px] mt-12 grid grid-rows-2 grid-cols-3 gap-x-4 gap-y-20">
      <div className="cursor-default relative block">
        <div className="text-[#191970] font-medium leading-[60px] text-5xl">
          Why The Industry Chooses Clickdee?
        </div>

        <div className="pt-8 text-[18px]">
          We understand performance marketing from every angle and every stage
          of the funnel. Our clients trust that we know what metrics move their
          business towards growth. Our pulishers and affiliate partners know
          that we make maximum revenue and ROAS main focus when growing our
          partnerships.
        </div>
      </div>
      <div className="group hover:-translate-y-8 cursor-pointer px-12 pb-12 text-center">
        <div className="px-12 pb-8">
          <img src="/target.svg" alt="SVG" />
        </div>

        <div className="px-12 text-left text-[#191970] text-3xl ">
          Choose Your Local Targeting
        </div>
        <div className="text-left pt-4 pl-12 invisible group-hover:visible">
          Our targeted and tracked calls are tailored to your business needs,
          audience, and geolocation.
        </div>
      </div>
      <div className="group hover:-translate-y-8 cursor-pointer px-12 pb-12 text-center">
        <div className="px-12 pb-8">
          <img src="/funnel.svg" alt="SVG" />
        </div>
        <div className="px-12 text-left text-[#191970] text-3xl">
          Track Your Conversion
        </div>
        <div className="text-left pt-4 pl-12 invisible group-hover:visible">
          We use the most progressive tracking and analytics technology to
          ensure that every call can be tracked and evaluated
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <div className="group hover:-translate-y-8 cursor-pointer text-center">
          <div className="px-12 pb-8">
            <img src="/colorwheel.svg" alt="SVG" />
          </div>
          <div className="px-12 text-left text-[#191970] text-3xl ">
            Customized Campaigns
          </div>
          <div className="text-left pt-4 pl-12 invisible group-hover:visible">
            Audiences, budgets, and goals: you decide the criteria for your
            digital ad campaign, and we’ll do the rest.
          </div>
        </div>
      </div>

      <div className="group hover:-translate-y-8 cursor-pointer px-12 pb-12 text-center">
        <div className="px-12 pb-8">
          <img src="/person.svg" alt="SVG" />
        </div>
        <div className="px-12 text-left text-[#191970] text-3xl ">
          Get Dedicated Support Team
        </div>
        <div className="text-left pt-4 pl-12 invisible group-hover:visible">
          We constantly monitor quality control! Our affiliate network of
          publishers are digital ad experts that have been vetted.
        </div>
      </div>
      <div className="group hover:-translate-y-8 cursor-pointer px-12 pb-12 text-center">
        <div className="px-12 pb-8">
          <img src="/assurance.svg" alt="SVG" />
        </div>
        <div className="px-12 text-left text-[#191970] text-3xl ">
          Quality Assurance
        </div>
        <div className="text-left pt-4 pl-12 invisible group-hover:visible">
          We constantly monitor quality control! Our affiliate network of
          publishers are digital ad experts that have been vetted.
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
