export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen py-20 flex justify-center">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent leading-tight text-center">
                    About Me
                </h2>
    
                {/* Container for the projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center">
                    {/* Project 1 */}
                    <div className="flex flex-col items-start gap-6">
                        <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                        <p className="mb-4">Project description</p>
                        <div className="flex space-x-4">
                            {["skill1", "skill2", "skill3"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-transparent border-2 border-red-600 text-red-600 py-2 px-4 min-w-[90px] rounded-full text-sm 
                                    flex justify-start items-center hover:bg-red-600 hover:text-white transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <br></br>
                    </div>
    
                    {/* Project 2 */}
                    <div className="flex flex-col items-start gap-6">
                        <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                        <p className="mb-4">Project description</p>
                        <div className="flex space-x-4">
                            {["skill4", "skill5", "skill6"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-transparent border-2 border-red-600 text-red-600 py-2 px-4 min-w-[90px] rounded-full text-sm 
                                    flex justify-start items-center hover:bg-red-600 hover:text-white transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <br></br>
                    </div>
    
                    {/* Project 3 */}
                    <div className="flex flex-col items-start gap-6">
                        <h3 className="text-xl font-semibold mb-4">Project 3</h3>
                        <p className="mb-4">Project description</p>
                        <div className="flex space-x-4">
                            {["skill7", "skill8", "skill9"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-transparent border-2 border-red-600 text-red-600 py-2 px-4 min-w-[90px] rounded-full text-sm 
                                    flex justify-start items-center hover:bg-red-600 hover:text-white transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
    
                    {/* Project 4 */}
                    <div className="flex flex-col items-start gap-6">
                        <h3 className="text-xl font-semibold mb-4">Project 4</h3>
                        <p className="mb-4">Project description</p>
                        <div className="flex space-x-4">
                            {["skill10", "skill11", "skill12"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-transparent border-2 border-red-600 text-red-600 py-2 px-4 min-w-[90px] rounded-full text-sm 
                                    flex justify-start items-center hover:bg-red-600 hover:text-white transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
    
};