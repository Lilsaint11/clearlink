const Hero = () => {
    return ( 
        <div className="my-16 flex  justify-between">
            <div>
                <h1 className="font-semibold text-[51px] text-[#1D2939]">Uniting the world,<br/>one video call at a time</h1>
                <p className="font-regular text-[18px] text-[#667085]">Experience the future of communication with ClearLink –<br/> where crystal-clear video conferencing meets<br/> unparalleled simplicity.</p>
                <div className="flex w-full items-center gap-4 my-8">
                    <button className="py-[10px] px-[18px] w-60 font-semibold bg-[#175CD3] rounded-full text-[14px] text-white">Start your free trial</button>
                    <div className="flex w-full items-center gap-2">
                        <img src="/images/Frame 10.png" alt="" className="w-4 h-4 object-contain"/>
                        <p className="text-[14px] font-semibold text-[#175CD3]">Discover AI assistant</p>
                    </div>
                </div>
                <img src="/images/User reviews2.png" alt=""className="w-64" />
            </div>
            <div>
                <img src="/images/Frame 25.png" alt="" className="w-[530px]"/>
            </div>
        </div>
     );
}
 
export default Hero;