import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import SocialMediaSection from "../components/Social Media Section";
import FeaturesShowcaseSection from "../components/Features Showcase Section";
import OurProcessSection from "../components/Our Process Section";
import ExplainerSection from "../components/Explainer Section";
import SectionPrice from "../components/SectionPrice";
import Footer from "../components/Footer";
const Introduction: FunctionComponent = () => {
  return (
    <>
      <div className="w-full relative bg-colour-secondary-white-100-general overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[444px] box-border gap-[143px] leading-[normal] tracking-[normal] text-left text-31xl text-colour-main-blue-900 font-medium-16 mq450:gap-[61px] mq750:gap-[121px]">
        <div className="self-stretch h-[1025px] relative hidden z-[0]" />
        <img
          className="w-[1490px] h-[1161px] absolute !m-[0] top-[-49px] mq1150:top-[0px] right-[-250px] object-cover z-[1] mq675:w-[1290px] mq675:h-[961px] "
          alt=""
          src="/Path.png"
        />
        <img
          className="w-[1490px] h-[1161px] absolute !m-[0] top-[-49px] right-[-50px] mq1150:top-[300px] mq1150:w-[1290px] mq1150:h-[961px]  object-cover z-[1] mq675:w-[1190px] mq675:h-[861px] mq450:w-[930px] mq450:h-[601px] mq450:top-[430px] "
          alt=""
          src="/Hero.png"
        />
        <img
          className=" animate-[wiggle_1s_ease-in-out_infinite] hover:animate-spin w-[150px] h-[150px] absolute !m-[0] top-[250px] mq1150:w-[100px] mq1150:h-[100px] mq1150:top-[590px] mq675:top-[570px] right-[150px] object-cover z-[1] mq675:w-[90px] mq675:h-[90px] mq675:right-[120px] mq450:w-[70px] mq450:h-[70px] mq450:top-[600px] "
          alt=""
          src="/Shape.png"
        />
        <img
          className=" animate-wiggle hover:animate-spin w-[100px] h-[100px] absolute !m-[0] top-[350px] mq1150:w-[70px] mq1150:h-[70px] mq1150:top-[655px] mq1150:right-[80px] mq675:top-[620px] right-[50px] mq675:right-[50px] object-cover z-[1] mq675:w-[60px] mq675:h-[60px] mq450:w-[50px] mq450:h-[50px] mq450:top-[640px] mq450:right-[63px]   "
          alt=""
          src="/Shape (1).png"
        />
        <Nav />
        <div className="w-[865.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[539px] flex flex-col items-start justify-start gap-[69px] max-w-full mq450:gap-[17px] mq750:gap-[34px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[1px] leading-[66px] font-medium font-inherit z-[2] mq450:text-11xl mq450:leading-[40px] mq1050:text-21xl mq1050:leading-[53px]">
                Introduce Your Product Quickly & Effectively
              </h1>
              <div className="self-stretch relative text-lg leading-[30px] text-colour-main-blue-500 z-[2] mq1150:font-medium-16 mq1150:text-xl mq1150:text-left mq1150:text-colour-main-blue-900 mq750:font-medium-16 mq750:text-xl mq750:text-colour-main-blue-900">
                <p className="[margin-block-start:0] [margin-block-end:14px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
                <p className="m-0">
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
            <div className="w-[408.3px] flex flex-row flex-wrap items-start justify-start gap-[30.1px] max-w-full text-center text-base text-colour-secondary-white-100-general mq450:gap-[15px]">
              <button className=" cursor-pointer flex-1 rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-[5px] pr-px pl-0 box-border min-w-[123px] shrink-0 [debug_commit:1de1738] whitespace-nowrap z-[1] hover:bg-darkslateblue-400 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-darkslateblue-300 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] ">
                <div className="h-9 w-[189px] relative rounded-sm bg-colour-main-blue-800 hidden" />
                <div className=" text-colour-secondary-white-100-general text-center text-sm flex-1 relative leading-[26px] font-medium z-[1]">
                  Purchase UI Kit
                </div>
              </button>
              <button className="    flex-row   pt-1 px-0 pb-0  shrink-0 [debug_commit:1de1738] z-[2] text-colour-main-blue-900                cursor-pointer p-0 bg-[transparent] flex-1 rounded-sm box-border h-9 flex  items-center justify-center min-w-[123px] max-w-[290px] border-[2px] border-solid border-colour-main-blue-900 hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]        active:bg-colour-main-blue-900 active:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]">
                <div className="w-[189px]  relative text-sm rounded-sm shrink-0 [debug_commit:1de1738] z-[2] leading-[26px] font-medium whitespace-nowrap font-regular-16 text-colour-main-blue-900 text-center  active:text-colour-secondary-white-100-general">
                  Learn More
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeaturesShowcaseSection />
      <OurProcessSection />
      <SocialMediaSection />
      <ExplainerSection />
      <SectionPrice />
      <Footer />

    </>
  );
};

export default Introduction;
