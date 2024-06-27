import React from "react";
import Member from "./Member.jsx";
import { memberData } from "../programData.jsx";

const Community = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-start items-center gap-8">
      <header className="w-full flex items-start justify-center mt-6 pointer-events-none">
        <h1 className="uppercase text-[#fff] text-[28px] max-sm:text-[12px] font-semibold px-8 py-2 bg-[#4e4d4d8c] rounded-md">
          Community & members
        </h1>
      </header>
      <div className='flex flex-wrap max-sm:flex-col item-center justify-around gap-4 w-[80%] max-sm:w-auto'>
        {
          memberData.map((val,idx)=>{
            return <Member key={idx} {...val}/>
          })
        }
      </div>
    </section>
  );
};

export default Community;
