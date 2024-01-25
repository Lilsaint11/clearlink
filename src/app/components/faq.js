import Accordion from "./accordion";

const Faq = () => {
    const items = [
        {
        title: 'How many participants can join a ClearLink video conference?', 
        content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
        },
        {
         title: 'Can I use ClearLink on multiple devices?',
         content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.' 
        },
        {
         title: 'Is ClearLink compatible with other video conferencing platforms?', 
         content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
        },
        {
        title: 'How does ClearLink ensure the security of my video conferences?', 
        content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
        },
        {
        title: 'Do I need to download any software to use ClearLink?', 
        content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
        },
        {
        title: 'What kind of customer support does ClearLink provide?', 
        content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
        },
      ];
    
    return ( 
        <div className="flex justify-between w-full py-10">
            <div>
                <p className="text-[13px] font-semibold text-[#175CD3] tracking-wide">Support</p>
                <h1  className="text-[32px] font-semibold my-2 text-[#1D2939]">FAQs</h1>
                <p  className="text-[#667085] leading-[32px]">Everything you need to know about the product and billing.<br/>  Can’t find the answer you’re looking for? Please<br/> chat to our friendly team.</p>
            </div>
            <div className="w-1/2">
                <Accordion items={items} />
            </div>
        </div>
     );
}
 
export default Faq;