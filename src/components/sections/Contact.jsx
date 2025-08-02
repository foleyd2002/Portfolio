import { RevealScroll } from "../revealScroll";
import emailjs from 'emailjs-com';
import { useState } from 'react';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message sent successfully!!")
            setFormData({ name:"", email:"", message:""});
        })
        .catch(() => alert("Message failed to send!! Please try again"));
    }

    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center py-20 px-4">

            <RevealScroll>
                <div className="w-full max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-red-300 to-red-600 bg-clip-text text-transparent leading-tight text-center">
                        Contact Me
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>

                         {/* Name and Email: Input row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                                    placeholder="Your Name..."
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}>
                                    
                                </input>
                            </div>

                            {/* Email: Input in form */}
                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                                    placeholder="example@gmail.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}>
                                </input>
                            </div>
                        </div>

                        {/* Message: Text area in form */}
                        <div className="relative">
                            <textarea 
                                type="message" 
                                id="message" 
                                name="message" 
                                required 
                                value={formData.message}
                                rows={6}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5 resize-none"
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({...formData, message: e.target.value})}>
                            </textarea>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-95">
                            Submit
                        </button>
                    </form>
                </div>
            </RevealScroll>
        </section>
    );
}
