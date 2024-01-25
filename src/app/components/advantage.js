const Advantage = () => {
    const advs = [
                    {img:"Icon",title:"Crystal-clear HD video",desc:"No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."},
                    {img:"recording-01",title:"Noise-canceling audio",desc:"Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."},
                    {img:"calendar",title:"Scheduling made easy",desc:"Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."},
                    {img:"lock-unlocked-04",title:"Bank-grade security",desc:"Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."}
                ]
    return ( 
        <div className="flex flex-col gap-16 pb-20">
            <div>
                <p className="text-[13px] font-semibold text-[#175CD3] tracking-wide">The ClearLink Advantage</p>
                <h2 className="text-[32px] font-semibold my-2 text-[#1D2939]">Why choose ClearLink?</h2>
                <p className="text-[#667085] leading-[32px]">In a world where connection is everything, ClearLink takes the lead. Our<br/> cutting-edge video conferencing app offers:</p>
            </div>
            <div className="flex justify-between">
                <div className="grid grid-cols-2 gap-8">
                    {advs.map(adv => (
                        <div className="w-72 flex flex-col gap-2">
                            <div className="mb-2 bg-[#F9FAFB] h-11 w-11 rounded-full flex items-center justify-center shadow-md shadow-slate-200">
                                <img src={"/images/"+adv.img+ ".png"} alt="" className="w-5"/>
                            </div>
                            <h3 className="text-[17px] text-[#101828] font-semibold">{adv.title}</h3>
                            <p className="text-[13px] text-[#475467] leading-[25px] mt-1">{adv.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="w-96 relative">
                    <img src="/images/Hand-drawn arrow.png" alt="" className="absolute -top-[190px] left-3 w-60"/>
                    <img src="/images/Rectangle 1.png" alt="" className="object-contain"/>
                </div>
            </div>
        </div>
     );
}
 
export default Advantage;