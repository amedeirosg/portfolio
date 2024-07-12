import { Mail, Phone } from "lucide-react";
import { useContext, useRef } from "react";
import contexts from "../Context/Context";

export default function Footer() {
  //@ts-ignore
  const { contactRef } = useContext(contexts);
  const phoneRef = useRef<HTMLSpanElement | null>(null);
  const mail = "medeiirosdev@gmail.com";
  const handleClick = () => {
    var phoneNumber = phoneRef?.current ? phoneRef.current.textContent : "";

    if (phoneNumber) {
      phoneNumber = phoneNumber.replace(/[\s()-]/g, "");
      console.log(phoneNumber);
    }

    const message = "Olá, estou precisando de um website!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <footer ref={contactRef}>
      <div className="footerContainer text-[--white] w-full h-[236px]  flex flex-col items-center justify-center gap-6">
        <span className="text-3xl font-bold">CONTATO</span>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex gap-3 items-center">
            <Mail />
            <a href="mailto:medeiirosdev@gmail.com" target="_blank">
              <span className="text-xl underline">medeiirosdev@gmail.com</span>
            </a>
          </div>
          <div
            className="flex gap-3 items-center cursor-pointer"
            onClick={handleClick}
          >
            <Phone />
            <span ref={phoneRef} className="text-xl underline">
              (31) 9 9625-9145
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
