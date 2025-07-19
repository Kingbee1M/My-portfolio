const jobs = [
    {
        job: "Primeorb, Remote—Front-End Developer Intern",
        description: [
            "Worked alongside the frontend team to develop a login page, sign-up page, contact page",
            "Developed and deployed a login page, sign-up page, contact page, and subscription feature using Next.js, integrating API endpoints for seamless data exchange.",
            "Integrated Google Maps to display the firm’s location and implemented interactive popups using Zoho for enhanced user engagement.",
            "Configured environment variables, optimized the production application, and hosted it on Netlify with continuous deployment via GitHub.",
            "Built dynamic, responsive UIs using Next.js, Tailwind CSS, TypeScript, and Zustand for state management.",
            "Collaborated in a two-member team to design, refine, and deploy scalable web applications using Agile methodologies."
        ]
    },
    {
        job: "HMG Internship, Remote—Front-End Developer Intern",
        description: [
            "Designed and developed dynamic user interfaces tailored to client requirements.",
            "Integrated web applications with modern frameworks and tools like Next.js, Tailwind CSS, and TypeScript.",
            "Collaborated on feature implementation, including interactive popups and form optimizations.",
            "Contributed to code reviews and iterative development processes within Agile workflows.",
        ]
    },
]

export default function 
Home() {

  return (
    <div className="w-full flex flex-col items-center justify-items-center text-black dark:text-white mt-7">
                   <div className="rounded-3xl bg-gray-300 p-2">EXPERIENCE</div>
            <h1 className="text-[20px] lg:text-[22px] mt-6 w-3/5 lg:w-full text-center">Here is a list of my most recent experiences</h1>
            <div className="flex flex-col items-center justify-center w-full lg:w-9/10 gap-6 mt-10">
                {jobs.map((job, index) => (
                    <div key={index} className="w-9/10 lg:w-3/5 bg-white dark:bg-[var(--light-Blue)] p-6 rounded-lg shadow-md mt-6">
                        <h2 className="text-[18px] font-semibold mb-4">{job.job}</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {job.description.map((desc, descIndex) => (
                                <li key={descIndex} className="text-[16px]">{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
    </div>
  );
}