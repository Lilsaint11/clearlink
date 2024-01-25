import { IoIosArrowDown } from "react-icons/io";
const Nav = () => {
    return ( 
        <div className="bg-[#F2F4F7] w-full flex items-center justify-between py-[12px] px-[24px] rounded-full">
            <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="" className="w-5"/>
                <p className="font-semibold text-[20px]">ClearLink<span className="text-[#528BFF]">.</span></p>
            </div>
            <div className="flex gap-8 text-[#667085] font-semibold text-[16px]">
                <div className="flex items-center gap-1">
                    <p>Products</p>
                    <IoIosArrowDown/>
                </div>
                <div className="flex items-center gap-1">
                    <p>Solutions</p>
                    <IoIosArrowDown/>
                </div>
                <div className="flex items-center gap-1">
                    <p>Resources</p>
                    <IoIosArrowDown/>
                </div>
                <p>Pricing</p>
            </div>
            <div className="flex gap-3">
                <button className="py-[10px] px-[18px] font-semibold bg-white rounded-full  text-[14px]">Talk to sales</button>
                <button className="py-[10px] px-[18px] font-semibold bg-[#175CD3] rounded-full text-[14px] text-white">Sign up for free</button>
            </div>
        </div>
     );
}
 
export default Nav;