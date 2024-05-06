import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="w-full bg-colour-secondary-white-100-general max-w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 bg-lavender flex flex-col items-center justify-start pt-[42px] px-5 pb-8 box-border gap-[46px] max-w-full text-left text-sm text-colour-main-grey-400 font-medium-16 mq600:gap-[23px]">
        <div className="w-full h-[216px] relative bg-lavender hidden max-w-full" />
        <div className="w-[1110px] flex flex-row items-start justify-between gap-[20px] max-w-full mq600:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[26px] px-0 pb-0">
            <p className="m-0 relative leading-[24px] font-medium z-[1]">
              ©2023 Yourcompany
            </p>
          </div>
          <div className="w-[182px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-7xl text-colour-logo-primary">
            <h2 className="m-0 relative text-inherit leading-[38px] font-black font-inherit inline-block min-w-[95px] z-[1] mq450:text-[21px] mq450:leading-[30px]">
              Landing
            </h2>
          </div>
          <div className="w-[109px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
            <button className="cursor-pointer [border:none] py-1 px-0 bg-colour-main-blue-800 self-stretch rounded-sm flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-steelblue hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-darkslateblue-300 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              <div className="h-[26px] w-[109px] relative rounded-sm bg-colour-main-blue-800 hidden" />
              <div className="flex-1 relative text-xs leading-[18px] font-medium font-medium-16 text-colour-secondary-white-100-general text-center z-[1]">
                Purchase now
              </div>
            </button>
          </div>
        </div>
        <div className="w-[1110px] flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch h-px relative bg-lightgray z-[1]" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-row items-start justify-start gap-[60px] mq450:hidden">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[24px] font-medium-16 text-colour-main-blue-300 text-left inline-block min-w-[38px] z-[1] hover:text-darkslateblue-200 active:text-darkslateblue-100 active:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                Home
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[24px] font-medium-16 text-colour-main-blue-300 text-left inline-block min-w-[38px] z-[1] hover:text-darkslateblue-200 hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] active:text-colour-logo-primary active:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                About
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[24px] font-medium-16 text-colour-main-blue-300 text-left inline-block min-w-[49px] z-[1] hover:text-darkslateblue-200 hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] active:text-colour-logo-primary active:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                Contact
              </button>
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <img
                  className="h-4 w-4 relative min-h-[16px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/iconsocialinstagram-copy-4.svg"
                />
                <img
                  className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/iconsocialinstagram-copy-3@2x.png"
                />
                <img
                  className="h-4 w-4 relative min-h-[16px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/iconsocialinstagram-copy-2.svg"
                />
                <img
                  className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/iconsocialinstagram-copy@2x.png"
                />
                <img
                  className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/iconsocialinstagram@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
