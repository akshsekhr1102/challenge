import { MessageCircleCodeIcon } from "lucide-react";

export default function ScrollingText() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-2 border">
      <p className=" flex text-sm animate-marquee">
        Payment in 4 installments with Paypal
        <MessageCircleCodeIcon />! &nbsp;Deicated and available customer service
        &nbsp;Authentic, unworn products &nbsp;
      </p>
    </div>
  );
}
