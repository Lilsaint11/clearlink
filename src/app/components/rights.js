import { FaLinkedin,FaTwitter,FaFacebook,FaInstagram,FaGithub,FaYoutube } from "react-icons/fa";
const Rights = () => {
    return ( 
        <div className="bg-[#F9FAFB] w-full flex justify-between items-center px-20 h-20">
            <p className="text-[#667085] text-[14px]">© 2023 ClearLink. All rights reserved.</p>
            <div className="text-gray-400 flex gap-5">
                <FaLinkedin className="cursor-pointer" />
                <FaTwitter  className="cursor-pointer"/>
                <FaFacebook  className="cursor-pointer"/>
                <FaInstagram  className="cursor-pointer"/>
                <FaGithub  className="cursor-pointer"/>
                <FaYoutube className="cursor-pointer" />
            </div>
        </div>
     );
}
 
export default Rights;