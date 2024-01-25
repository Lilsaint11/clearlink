import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Trial = () => {
    const trialDetails = [
        {name:"30 days free trial"},
        {name:"Cancel at any time"},
        {name:"Access to all features"},
        {name:"Peronalized onboarding"},
    ]
    return ( 
        <div className="flex justify-between mb-10">
            <div className="flex flex-col gap-2">
                <h2 className="text-[32px] font-semibold my-2 text-[#1D2939]">Ready to clear the path to<br/> perfect communication?</h2>
                {trialDetails.map(trialDetail => (
                    <div className="flex items-center gap-2">
                        <IoIosCheckmarkCircleOutline className="text-[20px] text-blue-700"/>
                        <p  className="text-[#667085] leading-[32px]">{trialDetail.name}</p>
                    </div>
                ))}
                <div className="flex gap-3 mt-5">
                    <button className="py-[10px] px-[28px] font-semibold bg-white rounded-full  text-[14px] border border-[#98A2B3]">Talk to sales</button>
                    <button className="py-[10px] px-[28px] font-semibold bg-[#175CD3] rounded-full text-[14px] text-white">Start your free trial</button>
                </div>       
            </div>
            <div className="w-1/2">
                <img src="/images/Screen mockup.png" alt="" />
            </div>
        </div>
     );
}
 
export default Trial;