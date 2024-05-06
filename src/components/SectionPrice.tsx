import { FunctionComponent } from "react";
import TextSectionPrice from "./TextSection Price";

const SectionPrice: FunctionComponent = () => {
  return (
    <div className=" relative bg-colour-secondary-white-100-general max-w-full overflow-hidden leading-[normal] tracking-[normal] mq450:gap-[18px] mq450:pl-5 mq450:box-border mq750:pl-[77px] mq750:box-border">
      <img
        className=" ml-[-700px] h-full max-h-full min-h-[1000px] w-full min-w-[2546.93px] "
        alt=""
        src="/rectangle.svg"
      />
      <TextSectionPrice />
    </div>
  );
};

export default SectionPrice;
