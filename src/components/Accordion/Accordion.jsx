import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { accordionData } from "../../api";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
        <div className="w-full mx-auto space-y-4">
            {accordionData?.map((item, index) => (
                <div
                    key={index}
                    className={twMerge(
                        clsx("text-white overflow-hidden",
                        "shadow-md transition-all")
                    )}
                    >
                    {/* Accordion header */}
                    <button
                        onClick={() => toggleIndex(index)}
                        className={clsx(
                        "w-full flex justify-between items-center px-4 py-3 text-left font-medium border-b-2 border-[#ADB2B1]",
                        // {
                        //     "bg-purple-600": activeIndex === index,
                        //     "bg-gray-700": activeIndex !== index,
                        // }
                        )}
                    >
                        <h2 className="font-bold text-white text-lg md:text-xl lg:text-2xl">{item?.title}</h2>
                        <span
                        className={twMerge(
                            clsx("transform transition-transform duration-500", {
                                "rotate-180": activeIndex === index,
                            })
                        )}
                        >
                        {/* add icon and remove icon */}
                        {activeIndex === index ? <RemoveIcon /> : <AddIcon/>}
                        </span>
                    </button>

                    
                    {/* Accordion description */}
                    <div
                        className={twMerge(
                        clsx("px-4 py-3 text-sm lg:text-[15px] text-[#ADB2B1] font-normal", {
                            hidden: activeIndex !== index,
                            "block ": activeIndex === index,
                        })
                        )}
                    >
                        {item?.description}
                    </div>
                </div>
            ))}
        </div>
  );
};

export default Accordion;
