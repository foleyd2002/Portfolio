export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen py-20 flex justify-center">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent leading-tight text-center">
                    My Projects
                </h2>

                {/* Container for the projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center">
                   {/* Project 1 */}
                    <div className="flex flex-col items-start gap-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 border border-white/10 rounded-xl p-8 max-w-xs">
                        <h3 className="text-xl font-semibold mb-4">Python Maze Game</h3>
                        <p className="mb-4 text-left">A Python-based, OOP maze game. Record the fastest time as you as you make your way through a range of randomnly generate levels, with 3 difficulty levels</p>
                        <div className="flex space-x-4">
                            {["Python", "OOP", "GitHub"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/10
                                                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* This is to add a view project button/hover */}
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/foleyd2002/Python_Maze_Game" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-300 transition-colors flex items-center border border-white/10 rounded-xl p-2"
                                aria-label="View Python Maze Game repository on GitHub"
                            >
                                View Project 
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 ml-2"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.563 4.935.36.31.682.92.682 1.855 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.482C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="flex flex-col items-start gap-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 border border-white/10 rounded-xl p-8 max-w-xs">
                        <h3 className="text-xl font-semibold mb-4">BiteFolio</h3>
                        <p className="mb-4 text-left">The best software to track your favourite bars/restaurants. Make record of your favourite spots and rank them accordingly. Create your own Food and Drink Portfolio</p>
                        <div className="flex space-x-4">
                            {["Python", "Django", "API's"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/10
                                                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* This is to add a view project button/hover */}
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/foleyd2002/BiteFolio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-300 transition-colors flex items-center border border-white/10 rounded-xl p-2"
                                aria-label="View Python Maze Game repository on GitHub"
                            >
                                View Project 
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 ml-2"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.563 4.935.36.31.682.92.682 1.855 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.482C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="flex flex-col items-start gap-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 border border-white/10 rounded-xl p-8 max-w-xs">
                        <h3 className="text-xl font-semibold mb-4">DownhillDudes</h3>
                        <p className="mb-4 text-left">A mountain biker website, highlighting the best routes and riders in the game. A Django based website, styled with HMTL, CSS and JS</p>
                        <div className="flex space-x-4">
                            {["JavaScript", "CSS", "Python"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/10
                                                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* This is to add a view project button/hover */}
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/foleyd2002/Mountain_biking_project" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-300 transition-colors flex items-center border border-white/10 rounded-xl p-2"
                                aria-label="View Python Maze Game repository on GitHub"
                            >
                                View Project 
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 ml-2"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.563 4.935.36.31.682.92.682 1.855 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.482C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="flex flex-col items-start gap-6 transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 border border-white/10 rounded-xl p-8 max-w-xs">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Website</h3>
                        <p className="mb-4 text-left">The site you are currently on, my personal portfolio website. Made with React.js and styled with Tailwind</p>
                        <div className="flex space-x-4">
                            {["React", "JavaScript", "CSS"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/10
                                                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* This is to add a view project button/hover */}
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/foleyd2002/Portfolio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-red-500 hover:text-red-300 transition-colors flex items-center border border-white/10 rounded-xl p-2"
                                aria-label="View Python Maze Game repository on GitHub"
                            >
                                View Project 
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 ml-2"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.563 4.935.36.31.682.92.682 1.855 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.482C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
    
};