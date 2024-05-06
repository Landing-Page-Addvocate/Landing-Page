import { FunctionComponent } from "react";

const OurProcessSection: FunctionComponent = () => {
  return (
    <div className="w-full max-h-[900px] bg-colour-secondary-white-100-general max-w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 flex flex-row items-end justify-start pt-[100px] pb-[120px] pr-[168px] pl-[194.5px] box-border relative gap-[154.5px] max-w-full text-left text-17xl text-colour-main-blue-900 font-medium-16 lg:flex-wrap lg:gap-[77px] lg:pl-[97px] lg:pr-[84px] lg:box-border mq450:gap-[19px] mq450:pt-20 mq450:px-5 mq450:pb-[85px] mq450:box-border mq750:gap-[39px] mq750:pl-12 mq750:pr-[42px] mq750:box-border">

        <img
          className="h-full max-h-[615.8px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[311px] z-[1]"
          loading="lazy"
          alt=""
          src="/undraw-happy-news-hxmt@2x.png"
        />
        <div className="w-[444px] flex flex-col items-start justify-end pt-0 px-0 pb-[36.2px] box-border min-w-[444px] max-w-full lg:flex-1 mq1050:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-medium font-inherit z-[1] mq1050:text-10xl mq1050:leading-[38px] mq450:text-3xl mq450:leading-[29px]">
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
        </div>
      </section>
    </div>
  );
};

export default OurProcessSection;
