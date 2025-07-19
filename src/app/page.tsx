
import Intro from "@/component/ui/intro";
import About from "@/component/ui/About";
import Skills from "@/component/ui/Skills";
import Experience from "@/component/ui/Experience";


export default function Home() {

  return (
    <div className="w-full flex flex-col items-center justify-items-center bg-white text-black dark:bg-black dark:text-white mt-7">
    <Intro />
    <div className="w-full bg-[var(--grey)] dark:bg-[var(--deep-Blue)] flex justify-center items-center py-10 mt-12"><About /></div>
    <Skills />
    <div className="w-full bg-[var(--grey)] dark:bg-[var(--deep-Blue)] flex justify-center items-center py-10 mt-12"><Experience /></div>
    </div>
  );
}