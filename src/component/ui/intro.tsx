import Image from "next/image"
import { FaLocationDot, FaXTwitter, FaPhone  } from "react-icons/fa6";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Intro() {
    return (
        <div className="flex flex-col items-start justify-start h-auto w-9/10 gap-7 lg:w-9/10 lgitems-center lg:justify-center bg-grey-500 ">
            <div className="flex flex-col-reverse items-center justify-between h-auto w-full gap-7 lg:w-9/10 lg:flex-row">
            <div className="w-full lg:w-2/3 gap-4">
                <p className="text-[28px] lg:text-[24px]">Hi there,<br className="lg:hidden" /> I&apos;m Habeeb 👋🏽</p>
                <p className="w-full lg:w-4/5 text-[16px] lg:text-[20px] lg:font-[100]">I am a passionate front-end developer with experience in building dynamic and responsive web applications using frameworks such as Next.js, Vue.js, and Tailwind CSS. Skilled in state management with Pinia and Zustand, API integration, and optimizing user experiences. I also have experience in building mobile app frontends using Expo (React Native). Additionally, I work with backend technologies, including PHP, MySQL, and Laravel.</p>
            </div>
            <div className="flex justify-center items-center w-[270px] h-[270px] rounded-full bg-gray-300 overflow-hidden">
            <Image
                src="/images/Profile-1.jpg"
                alt="Profile Picture"
                width={150}
                height={150}
                className="w-[250px] h-[250px] rounded-full object-cover"
                />
            </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2">
                <p className="flex flex-row items-center justify-center gap-2"><FaPhone />09068235584</p>
                <p className="flex flex-row items-center justify-center gap-2"><SiGmail />idris.b.habeeb@gmail.com</p>
                <p className="flex flex-row items-center justify-center gap-2"><FaLocationDot /> Alimosho, ipaja, lagos</p>
                <div className="flex flex-row items-center justify-center gap-2"><div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div> Available for new projects</div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4">
                <a href="https://github.com/Kingbee1M" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 text-[16px] font-semibold hover:text-blue-700">
                    <FaGithub className="text-2xl" />
                </a>
                
                <a href="https://web.facebook.com/habib.idris.9674" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 text-[16px] font-semibold hover:text-blue-700">
                    <FaFacebook  className="text-2xl" />
                </a>
                
                <a href="https://x.com/Idrishabeeb10" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 text-[16px] font-semibold hover:text-blue-700">
                    <FaXTwitter  className="text-2xl" />
                </a>
            </div>
            {/* <Image
            src="/images/icons8-laptop.gif"
            alt="Laptop Icon"
            width={80}
            height={80}
            unoptimized={true}
            className=" absolute right-5 bottom-1 w-16 transition-transform hover:scale-110" 
            /> */}
        </div>
    )
}   