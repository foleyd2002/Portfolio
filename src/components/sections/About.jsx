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
    

    return <section id="about" className="min-h-screen flex justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent leading-tight text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all text-center">
                <p className="text-gray-300 mb-6">
                    I am a passionate Software developer and Student
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-center">
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

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-center">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-left">
                    <h3 className="text-xl font-bold mb-4">
                        Education
                    </h3>
                    <ul>
                        <li>
                            <strong>BSc Computing for Business</strong> - Dublin City University (2022-2026)
                        </li>
                        <br></br>
                        <li>
                            <strong>BSc General Engineering</strong> - Technological University Dublin (2021)   (Year 1 Only)
                        </li>
                        <br></br>
                        <li>
                            <strong>Leaving Certificate</strong> - Christian Brothers Secondary School - 509 Points (2015-2021)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all text-left">
                    <h3 className="text-xl font-bold mb-4">
                        Experience
                    </h3>
                    <ul>
                        <li>
                            <strong>Shutterstock</strong> - Software Engineering Intern (Jan 2025 - Aug 2025)
                        </li>
                        <br></br>
                        <li>
                            <strong>Beresford McCardle Chartered Accountants</strong> - IT Accounts Summer Intern (May 2023 - Sep 2023)
                        </li>
                        <br></br>
                        <li>
                            <strong>Fingallians Club Bar</strong> - Senior Barman and Assistant Manager (Aug 2021 - Feb 2025)
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
}