import { FunctionComponent } from "react";

const Nav: FunctionComponent = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-center pt-3 px-5 pb-2.5 box-border gap-[271px] max-w-full z-[3] text-left text-7xl text-colour-logo-primary font-medium-16 mq1150:gap-[135px] mq450:gap-[34px] mq750:gap-[68px]">
      <nav className="m-0 w-[245px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border mq750:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-sm text-colour-main-blue-500 font-medium-16">
          <div className="self-stretch flex-1 flex flex-row items-center justify-between py-0 px-2.5 box-border min-w-[170px] max-w-[300px] sm:min-w-[100px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[38px] relative text-sm leading-[24px] font-regular-16 text-colour-main-blue-500 text-left inline-block h-6 shrink-0 hover:text-colour-main-blue-800 hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] active:text-colour-main-blue-500 active:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Home
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[38px] relative text-sm leading-[24px] font-regular-16 text-colour-main-blue-500 text-left inline-block h-6 shrink-0 hover:text-colour-main-blue-800 hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] active:text-colour-main-blue-500 active:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              About
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[49px] relative text-sm leading-[24px] font-regular-16 text-colour-main-blue-500 text-left inline-block h-6 shrink-0 hover:text-colour-main-blue-800 hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] active:text-colour-main-blue-500 active:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Contact
            </button>
          </div>
        </nav>
      </nav>
      <div className="h-[60px] w-[1440px] relative hidden max-w-full" />
      <div className="w-[163px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
        <h2 className="m-0 relative text-inherit leading-[38px] font-black font-inherit inline-block min-w-[95px] whitespace-nowrap z-[2]">
          Landing
        </h2>
      </div>
      <div className="w-40 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-center text-xs text-colour-secondary-white-100-general">
        <button className=" cursor-pointer self-stretch rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-1 px-0 whitespace-nowrap z-[1] hover:bg-darkslateblue-400 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] active:bg-darkslateblue-300 active:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <div className="h-[26px] w-40 relative rounded-sm bg-colour-main-blue-800 hidden" />
          <div className="flex-1 relative leading-[18px] font-medium z-[1] text-center text-xs text-colour-secondary-white-100-general ">
            Buy Now
          </div>
        </button>
      </div>
    </header>
  );
};

export default Nav;
