import { FunctionComponent } from "react";
import FeauturesSection from "./Feautures Section";

const FeaturesShowcaseSection: FunctionComponent = () => {
  return (
    <div className="w-full bg-transparent max-w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[109.6px] px-[165px] pb-[108.1px] box-border relative gap-[30px] max-w-full text-left text-17xl text-colour-main-blue-900 font-medium-16 mq750:gap-[15px] mq750:pl-[82px] mq750:pr-[82px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq675:pt-[71px] mq675:pb-[70px] mq675:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[50.4px] px-0 pb-0 box-border min-w-[351px] max-w-full mq750:min-w-full mq675:pt-[33px] mq675:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[80px] mq450:gap-[20px] mq675:gap-[40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-medium font-inherit z-[2] mq750:text-10xl mq750:leading-[38px] mq450:text-3xl mq450:leading-[29px]">
                Light, Fast & Powerful
              </h1>
              <div className="self-stretch relative text-base leading-[26px] text-colour-main-blue-400 z-[2]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
                <p className="m-0">
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq675:flex-wrap">
              <FeauturesSection />
              <FeauturesSection />
            </div>
          </div>
        </div>
        <img
          className="h-[524.3px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[351px] z-[2] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/undraw-mobile-login-ikmv@2x.png"
        />
      </section>
    </div>
  );
};

export default FeaturesShowcaseSection;
