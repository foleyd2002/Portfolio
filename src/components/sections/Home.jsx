import { RevealScroll } from "../revealScroll";

export const Home = () => {
    return (
        <section 
            id="Home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealScroll>
            <div className="text-center z-10 px-4">
                {/* This edits the writing on the home page, intro */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent leading-right">
                    Welcome to my Portfolio
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    My name is Darragh Foley. I am a <b>Software Engineering Intern @Shutterstock</b> and 3rd Year student @DCU School of Electronic Engineering and Computing 
                </p>
                {/* View projects button under home description */}
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(56,130,246,0.4)]">
                        View Projects
                    </a>

                    <a href="#contact" className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(56,130,246,0.2)] hover:bg-red-500-10">
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealScroll>
        </section>
    );
};