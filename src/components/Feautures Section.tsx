import { FunctionComponent } from "react";

const FeauturesSection: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[166px] text-left text-base text-colour-main-blue-900 font-medium-16">
      <img
        className="self-stretch h-19 relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch relative leading-[26px] font-medium z-[2]">
          Title Goes Here
        </div>
        <div className="self-stretch relative text-xs leading-[18px] text-colour-main-grey-600 z-[2]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
          </div>
      </div>
    </div>
  );
};

export default FeauturesSection;
