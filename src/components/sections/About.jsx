import { RevealScroll } from "../revealScroll";

export const About = () => {

    const frontendSkills = [
        "HTML", 
        "CSS", 
        "Javascript", 
        "React", 
        "TailwindCSS"
    ]

    const backendSkills = [
        "Python", 
        "RScript", 
        "Django", 
        "Node.js", 
        "SQL",
    ] 
    
    const toolsTech = [
        "GitHub", 
        "Jenkins", 
        "NewRelic", 
        "CoPilot", 
        "Docker",
    ] 

    const softSkills = [
        "Communication", 
        "Problem Solving", 
        "Knowledge Seeker", 
        "Collaboration", 
        "Agile Teams Experience",
    ] 

    

    return (
        <section 
            id="about" 
            className="min-h-screen flex justify-center py-20"
        >
        
        <RevealScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent leading-tight text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 transition-all text-center mb-12">
                    <p className="text-gray-300 mb-6">
                        I am a passionate Software developer and Student. I have experience working on an agile software team creating microservices and large scale review and ingestion systems using Node.js, Python, AWS and a range of other services. I am passionate about sport and physical health, which is a focus for a range of work I have been involved with.   
                    </p>
                </div>

                {/* This is the grid for the skills, Frontend */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 transition-all text-center border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white text-center">Frontend</h3>
                        <div className="flex flex-wrap gap-3">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-red-500 text-white py-2 px-4 min-w-[90px] rounded-full text-sm 
                                            flex justify-start items-center hover:bg-red-800 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* This is the grid for the skills, Backend */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 transition-all text-center border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white text-center">Backend</h3>
                        <div className="flex flex-wrap gap-3 text-center">
                            {backendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className=" text-center bg-red-500 text-white py-2 px-4 min-w-[90px] rounded-full text-sm 
                                            flex justify-start items-center hover:bg-red-800 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* This is the grid for the skills, Tools and Tech */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 transition-all text-center border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white text-center">Tools</h3>
                        <div className="flex flex-wrap gap-3 text-center">
                            {toolsTech.map((tech, key) => (
                                <span 
                                    key={key}
                                    className=" text-center bg-red-500 text-white py-2 px-4 min-w-[90px] rounded-full text-sm 
                                            flex justify-start items-center hover:bg-red-800 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* This is the grid for the soft skills */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 transition-all text-center border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white text-center">Soft Skills</h3>
                        <div className="flex flex-wrap gap-3 text-center">
                            {softSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className=" text-center bg-red-500 text-white py-2 px-4 min-w-[90px] rounded-full text-sm 
                                            flex justify-start items-center hover:bg-red-800 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4">
                            Education
                        </h3>
                        <ul>
                            <li>
                                <a 
                                    href="https://www.dcu.ie/computing/bsc-computing-business" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition-colors cursor-pointer block"
                                >
                                    <strong>BSc Computing for Business</strong> - Dublin City University (2022-2026)
                                </a>
                            </li>
                            <br></br>
                            <li>
                                <a 
                                    href="https://www.tudublin.ie/study/undergraduate/courses/engineering-general-entry-tu805/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition-colors cursor-pointer block"
                                >
                                    <strong>BSc General Engineering</strong> - Technological University Dublin (2021)   (Year 1 Only)
                                </a>
                            </li>
                            <br></br>
                            <li>
                                <strong>Leaving Certificate</strong> - Christian Brothers Secondary School - 509 Points (2015-2021)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4">
                            Experience
                        </h3>
                        <ul>
                            <li>
                                <a 
                                    href="https://www.shutterstock.com/about" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition-colors cursor-pointer block"
                                >
                                    <strong>Shutterstock</strong> - Software Engineering Intern (Jan 2025 - Aug 2025)
                                </a>
                            </li>
                            <br></br>
                            <li>
                                <a 
                                    href="https://bmca.ie/about/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition-colors cursor-pointer block"
                                >
                                    <strong>Beresford McCardle Chartered Accountants</strong> - IT Accounts Summer Intern (May 2023 - Sep 2023)
                                </a>
                            </li>
                            <br></br>
                            <li>
                                <strong>Fingallians Club Bar</strong> - Senior Barman and Assistant Manager (Aug 2021 - Feb 2025)
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </RevealScroll>
    </section>
    );
}