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
        "R", 
        "Django", 
        "Node.js", 
        "SQL",
    ]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto  px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent leeading-right text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am a passionate Software developer and Student
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-red-500 text-gray py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                                           hover:text-red-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
}