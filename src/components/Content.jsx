import React, { useState, useRef } from 'react'
import { projects } from "../Constants"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'

const Content = ({ section }) => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_nrf82zh", "template_gyac98i", form.current, "r57FiYKQQfzmhZS0p")
            .then(() => {
                setIsSent(true);
                form.current.reset();
                toast.success("Message sent successfully.", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
            })
            .catch((error) => {
                toast.error("Error sending message.", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
            });
    }

    switch (section) {
        case "home":
            return (
                <div className="h-screen w-full flex items-center justify-center pt-20">
                    <div className="w-[650px] bg-black/10 backdrop-blur-md rounded-xl p-8 text-white">
                        <p className="text-base sm:text-lg md:text-lg mb-4">
                            A Software Developer with experience in Identity and Access Management (IAM) using SailPoint. Currently transitioning into fullstack/backend roles, specializing in building scalable systems using the MERN stack (MongoDB, Express.js, React, Node.js), Java, Spring Boot, Docker, and other modern web technologies.
                        </p>

                        <p className="text-lg font-semibold mb-2">Education:</p>
                        <ul className="list-disc pl-5 space-y-1 text-base sm:text-lg md:text-lg">
                            <li>Master in Computer Applications, Amity University (2023)</li>
                            <li>Bachelor in Commerce Honors, Guru Gobind Singh Inderprastha University (2020)</li>
                        </ul>
                    </div>
                </div>


            );
        case "contact":
            return (
                <div className="h-screen w-full flex items-center justify-center pt-20">
                    <ToastContainer />
                    <div className="w-[650px] bg-black/10 backdrop-blur-md rounded-xl p-8">
                        <div className="text-xl font-semibold text-white text-center text-outline">
                            <p className="text-base sm:text-lg md:text-lg mb-2">
                                Reach out to me for any queries, projects or hiring opportunities here:
                            </p>
                            <p className="text-base sm:text-lg md:text-lg mb-2">
                                Email: gagandeep161198@gmail.com
                            </p>
                            <p className="text-base sm:text-lg md:text-lg">
                                Phone: (+91) 9650274056
                            </p>
                        </div>

                        <div className="text-center mt-6">
                            <h3 className='text-xl font-semibold text-white'>
                                Or Send in a quick message.
                            </h3>
                            <form className='mt-4 flex flex-col space-y-4' ref={form} onSubmit={sendEmail}>
                                <input type='email' name="user_email" placeholder="Your Email" required
                                    className='w-full p-3 rounded-md bg-white text-black border-gray-600 focus:outline-none focus:border-gray-600' />
                                <input type='text' name="subject" placeholder="Subject" required
                                    className='w-full p-3 rounded-md bg-white text-black border-gray-600 focus:outline-none focus:border-gray-600' />
                                <textarea name="message" placeholder='Write your message here' rows="4"
                                    className='w-full p-3 rounded-md bg-white text-black border-gray-600 focus:outline-none focus:border-gray-600'></textarea>
                                <button type='submit'
                                    className='w-full bg-[#3B3B3B] text-white py-3 font-semibold rounded-md hover:opacity-90 transition'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

            );
        case "portfolio":
            return (
                <div className="w-full flex justify-center pt-20">
                    <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="w-full max-w-sm p-3 bg-white/10 backdrop-blur-md border border-[#222222] rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-[#636363] hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="p-2">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-36 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-3 pt-2 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-center text-gray-300 mb-3 pt-2 line-clamp-3">
                                        <a className="p-1" href={project.github}>Codebase</a>
                                        <p className="p-1"> || </p>
                                        <a className="p-1" href={project.github}>Visit</a>
                                    </div>
                                    <div>
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-[#D3D3D3] text-xs font-semibold text-[#141414] rounded-full px-2 py-1 mr-2 mb-2"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            );
        default:
            return null;
    }
}

export default Content
