import { FunctionComponent } from "react";

const ExplainerSection: FunctionComponent = () => {
  return (
    <div className="w-full bg-colour-secondary-white-100-general max-w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 flex flex-row flex-wrap items-start justify-start pt-[117.9px] pb-[116.1px] pr-[169px] pl-[209px] box-border relative gap-[172px] max-w-full text-left text-17xl text-colour-main-blue-900 font-medium-16 lg:gap-[86px] lg:pl-[104px] lg:pr-[84px] lg:box-border mq450:gap-[21px] mq450:pt-[77px] mq450:px-5 mq450:pb-[75px] mq450:box-border mq750:gap-[43px] mq750:pl-[52px] mq750:pr-[42px] mq750:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <img
          className="h-[312px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[289px] z-[1]"
          loading="lazy"
          alt=""
          src="/undraw-mention-6k5d@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0 box-border min-w-[289px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-medium font-inherit z-[1] mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
                Light, Fast & Powerful
              </h1>
              <div className="self-stretch relative text-base leading-[26px] text-colour-main-blue-400 z-[1]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
                <p className="m-0">
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[17px] box-border min-w-[289px] max-w-full text-center text-sm text-colour-secondary-white-100-general">
              <button className="cursor-pointer h-8 flex-1 rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start relative whitespace-nowrap z-[2] hover:bg-darkslateblue-400 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-darkslateblue-300 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                <div className="text-colour-secondary-white-100-general w-[189px] absolute !m-[0] top-[calc(50%_-_12px)] text-center text-sm left-[calc(50%_-_94.5px)] leading-[24px] font-medium inline-block">
                  Purchase Now
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplainerSection;
