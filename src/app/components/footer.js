const Footer = () => {
    return ( 
        <div className="py-10">
            <div className="flex justify-between">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="" className="w-5"/>
                        <p className="font-semibold text-[20px]">ClearLink<span className="text-[#528BFF]">.</span></p>
                    </div>
                    <p className="text-[#475467] text-[18px]">ClearLink is your gateway to effortless, high-<br/>quality video conferencing. Join us in shaping<br/> the future of communication!</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#667085] font-semibold">Product</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Overview</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Features</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Solutions</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Tutorials</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Pricing</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#667085] font-semibold">Company</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">About us</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Careers</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Press</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">News</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Contact</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#667085] font-semibold">Resources</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Blog</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Events</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Help centre</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Tutorials</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Support</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#667085] font-semibold">Legal</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Terms</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Privacy</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Cookies</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Licenses</p>
                    <p className="text-[#475467] text-[18px] font-semibold cursor-pointer">Contact</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#004EEB] font-semibold">Get the app</p>
                    <div >
                        <img src="/images/app store.png" alt="" className="-ml-2 cursor-pointer"/>
                        <img src="/images/google.png" alt="" className="-ml-1 cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;