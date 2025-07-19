import Image from "next/image";

const skills = [
    {
        name: "HTML5",
        icon: "/images/icons8-html-5.svg"
    },
    {
        name: "CSS3",
        icon: "/images/icons8-css-50.png"
    },
    {
        name: "jAVASCRIPT",
        icon: "/images/icons8-javascript.svg"
    },
    {
        name: "vue.js",
        icon: "/images/icons8-vuejs.svg"
    },
    {
        name: "Next.js",
        icon: "/images/nextjs-icon.svg"
    },
    {
        name: "React",
        icon: "/images/icons8-react-24.png"
    },
    {
        name: "TAILWIND CSS",
        icon: "/images/icons8-tailwind-css.svg"
    },
    {
        name: "TYPESCRIPT",
        icon: "/images/icons8-typescript.svg"
    },
    {
        name: "DOCKER",
        icon: "/images/icons8-docker.svg"
    },
    {
        name: "Expo",
        icon: "/images/icons8-expo.svg"
    },
    {
        name: "PHP",
        icon: "/images/icons8-php-logo.svg"
    },
    {
        name: "LARAVEL",
        icon: "/images/laravel.svg"
    },
    {
        name: "MySQL",
        icon: "/images/mysql.svg"
    },
    {
        name: "git",
        icon: "/images/icons8-git.svg"
    },
] 

export default function Skills() {
    return (
        <div className="flex flex-col items-center justify-center h-auto w-9/10 gap-7 mt-15 lg:w-9/10 lg:items-center lg:justify-center bg-grey-500">
            <div className="rounded-3xl bg-gray-300 p-2">SKILLS</div>
            <h1 className="text-[20px] lg:text-[22px]">These are the skills and tools i have aquired and are ablen to use</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-[150px] h-[150px] shadow-md dark:shadow-white dark:bg-white hover:shadow-lg transition-shadow duration-300">
                        <Image src={skill.icon} alt={`${skill.name} icon`} width={100} height={100} className="w-11 h-11 mb-2" />
                        <p className="text-center text-[12px] dark:text-black font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}