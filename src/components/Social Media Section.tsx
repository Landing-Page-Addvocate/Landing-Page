import { FunctionComponent } from "react";

const SocialMediaSection: FunctionComponent = () => {
  return (
    <div className="w-full bg-colour-secondary-white-100-general max-w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 flex flex-row items-end justify-start pt-[91.8px] px-[165px] pb-[90.2px] box-border relative gap-[125px] max-w-full text-left text-17xl text-colour-main-blue-900 font-medium-16 lg:flex-wrap lg:gap-[62px] lg:pl-[82px] lg:pr-[82px] lg:box-border mq750:gap-[31px] mq750:pl-[41px] mq750:pr-[41px] mq750:box-border mq450:gap-[16px] mq450:pt-[60px] mq450:pb-[59px] mq450:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <img
          className="h-[387px] flex-1 relative max-w-full overflow-hidden min-w-[351px] z-[1] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/undraw-social-influencer-sgsv.svg"
        />
        <div className="w-[445px] flex flex-col items-start justify-start pt-0 px-0 pb-[77px] box-border min-w-[445px] min-h-[307px] max-w-full lg:flex-1 mq1050:min-w-full">
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

export default SocialMediaSection;
