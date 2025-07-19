import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-auto gap-7 lg:w-9/10 lg:items-center lg:justify-center dark:text-black">
            <div className="rounded-3xl bg-gray-300 dark:text-white p-2">ABOUT ME</div>
            <h1 className="text-[20px] dark:text-white lg:text-[25px]">Here are some information about myself</h1>
            <div className=" flex flex-col justify-center items-center w-4/5 lg:w-full gap-10 lg:gap-0 mt-10 lg:mt-0 lg:flex-row lg:items-center lg:justify-between">
                <div className="  border-l-gray-300 border-b-gray-300 border-l-20 border-b-20">
                <Image
                    src="/images/Profile-4.jpg"
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className="w-[250px] h-[450px] p-5"
                    />
                    </div>
                    <p className="w-full lg:w-3/5 text-[16px] dark:text-white lg:text-[15px] lg:font-[100]">As a front-end developer with over two years of experience building responsive, user-friendly websites and applications. I&apos;m also a final-year Mechanical Engineering student at Lagos State University, where I’ve developed strong problem-solving skills that now power my approach to development.<br />

                    My journey into front-end began with a simple curiosity which later turned into a passion then a hobby. I&apos;ve built projects using modern tools like Next.js, Vue.js, and React Native (via Expo). I specialize in clean UI development with Tailwind CSS, TypeScript, and smooth component-based architecture.<br />
    
                    Currently, I’m interning at Primeorbs as a front-end developer. I&apos;ve worked on real-world projects like the company&apos;s official website and a mobile food delivery app modeled after apps of similar services. These experiences have strengthened my skills in API integration, state management (using Zustand, Redux Toolkit, and Pinia), and collaborative development in a professional environment.<br />

                    Though my primary focus is front-end, I also have experience working with backend technologies like PHP, Laravel, and MySQL, which helps me understand and contribute to full-stack applications.<br />

                    I’m always eager to learn new technologies, refine my craft, and take on challenging projects. Whether it&apos;s web, mobile, or backend work, I love turning ideas into interactive, meaningful products.<br /> </p>

            </div>
        </div>
    );
}