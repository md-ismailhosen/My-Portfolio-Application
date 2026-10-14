import React from 'react';
import profileImage from '../images/ismail_1116.JPG';

const About = () => {
    return (
        <div className=''>
            <section className='mt-16'>
                <div className=' about ' >
                    <img className='profileImage mt-16' src={profileImage} alt='profile image'></img>
                    <div className='name about'>
                        <h1 className='names'>Md.Ismail Hosen</h1>
                        <h1 className='se text-orange-300'>Software Engineer</h1>
                        <p className='see text-orange-300'>Engineering high-performance applications, scalable systems, and meaningful products.</p>
                    </div>
                    <div className='button'>
                        <button className='custom-btn'>About Me</button>
                    </div>
                    <div className=' grid md:grid-cols-2 gap-8 p-10'>
                        {/* card */}
                        <div>
                            {/*  card1 */}
                            <div className="border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 p-4 rounded-xl bg-[#0d1830] border border-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 duration-300">
                                <div className='flex'>
                                    <div className=''>
                                        <div class="mb-3 mr-3 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20"><svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
                                    </div>
                                    <h2 className=" mt-3 text-2xl font-bold text-orange-400 mb-6">Professional Overview</h2>
                                </div>

                                <p className="text-gray-300 leading-8">
                                    Hello, <br /> I’m Ismail Hosen— a dedicated Software Engineer passionate about designing and developing modern, scalable, and high-performance digital solutions. <br /> I specialize in creating clean, efficient, and user-focused applications that combine functionality with exceptional user experience.

                                    My interests span across full-stack web development, cloud technologies, and system architecture. <br /> I enjoy solving complex engineering challenges, optimizing application performance, and building systems that are reliable, maintainable, and future-ready. <br />

                                    I believe that great software is built through thoughtful design, continuous learning, attention to detail, and a strong commitment to clean architecture. I’m constantly exploring new technologies and best practices to improve both my technical skills and the quality of the products I create.

                                    Whether it’s developing modern web applications, architecting scalable systems, or collaborating on innovative ideas, I’m always motivated by opportunities to create meaningful impact through technology.
                                </p>

                                <hr className="my-6 border-gray-700" />

                                <p className="text-yellow-300 italic">
                                    My Philosophy <br />

                                    “I believe exceptional software is built through clarity, scalability, and purposeful engineering. <br /> My approach focuses on writing clean, maintainable code, designing resilient system architectures, and continuously evolving with modern technologies. <br /> I value innovation, performance, collaboration, and lifelong learning to create digital solutions that deliver meaningful impact, reliability, and long-term value.” 🚀
                                </p>
                            </div>

                        </div>
                        {/* Card 2 */}
                        <div className="border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 p-4 rounded-xl bg-[#0d1830] border border-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 duration-300">

                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                                    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-blue-400">NoteFlow</h3></div>

                            <div className="space-y-5 text-gray-300">
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Education</span>
                                    <span>B.Sc in Computer Science & Engineering CSE</span>
                                </div>

                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Specialization</span>
                                    <span className="text-orange-400">
                                        • Application Development <br />
                                        • System Design <br />
                                        • Cloud Engineering <br />
                                        • Full-Stack Development <br />
                                        • REST APIs <br />
                                        • React Router <br />
                                        • Database Design <br />
                                        • Scalable Backend Systems <br />
                                        • Cloud Infrastructure <br />
                                        • UI/UX Engineering <br />
                                        • Performance Optimization <br />
                                        • DevOps & Deployment <br />
                                        • AI Integration</span>
                                </div>
                                <div className="flex  border-b border-gray-700 pb-2">
                                    <span>Tech Focus</span>
                                    <span className='ml-80  text-orange-400'>
                                        • HTML <br />
                                        • CSS <br />
                                        • JavaScript <br />
                                        • React <br />
                                        • Firebase <br />
                                        • Node.js <br />
                                        • Python <br />
                                        • Java <br />
                                        • AWS  <br />
                                        • Appwrite <br />
                                    </span>
                                </div>
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Location</span>
                                    <span className="text-purple-400">Bangladesh/Dhaka/Singapore Mention 1</span>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 p-4 rounded-xl bg-[#0d1830] border border-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 duration-300">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                                    <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-purple-400">Technical Stack</h3></div>

                            <ul className="space-y-4 text-gray-300 ">
                                <div className='flex'>
                                    <div className='w-8 h-4 rounded-full bg-green-400 mt-1'></div>
                                    <div className='ml-4'>
                                        <li><span className='font-bold'>Frontend: </span> React, Next.js, Tailwind CSS, JavaScript, TypeScript,
                                            Jetpack Compose, XML, Responsive UI Design,
                                            Framer Motion, Modern Web Architecture</li>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-8 h-4 rounded-full bg-green-400 mt-1'></div>
                                    <div className='ml-4'>
                                        <li><span className='font-bold'>FBackend Engineering: </span>Python, Java, Kotlin, Spring Boot,
                                            RESTful APIs, Authentication & Authorization,
                                            Firebase, Express.js, Node.js</li>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-8 h-4 rounded-full bg-green-400 mt-1'></div>
                                    <div className='ml-4'>
                                        <li><span className='font-bold'>Database & DevOps: </span> SQL, MongoDB, Oracle Database,
                                            AWS, Azure, Appwrite,
                                            Docker, Git, GitHub,
                                            CI/CD Workflow, Cloud Deployment</li>
                                    </div>
                                </div>
                            </ul>
                        </div>


                        {/* Card 4 */}
                        <div className=" border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 p-4 rounded-xl bg-[#0d1830] border border-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 duration-300">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                                    <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-emerald-400">Professional Links</h3></div>

                            <div class="space-y-4">
                                <a href="mailto:hossain22205101797@diu.edu.bd" class="flex items-center gap-4 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-600/40 text-gray-200 hover:text-orange-400 transition-all duration-200 group hover:shadow-lg hover:-translate-y-0.5">
                                    <div class="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors group-hover:shadow-lg">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="font-medium text-base group-hover:text-white">Email</div>
                                        <div class="text-sm text-gray-400 group-hover:text-gray-300">Get in touch</div>
                                    </div>
                                    </a>
                                <a href="https://www.linkedin.com/in/md-ismial/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-600/40 text-gray-200 hover:text-blue-400 transition-all duration-200 group hover:shadow-lg hover:-translate-y-0.5">
                                    <div class="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors group-hover:shadow-lg">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="font-medium text-base group-hover:text-white">LinkedIn</div>
                                        <div class="text-sm text-gray-400 group-hover:text-gray-300">Professional network</div>
                                    </div>
                                    </a>
                                <a href="https://github.com/md-ismailhosen?tab=stars" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-600/40 text-gray-200 hover:text-green-400 transition-all duration-200 group hover:shadow-lg hover:-translate-y-0.5">
                                    <div class="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors group-hover:shadow-lg">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="font-medium text-base group-hover:text-white">GitHub</div>
                                        <div class="text-sm text-gray-400 group-hover:text-gray-300">Code portfolio</div>
                                    </div>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <section>
                <div>
                    <h1>Magnet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error molestias necessitatibus asperiores doloribus id aliquid delectus. Quisquam, in quam similique soluta corporis quo doloremque tenetur praesentium ipsum mollitia totam?</p>
                </div>
                <div>
                    <h1>Magnet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error molestias necessitatibus asperiores doloribus id aliquid delectus. Quisquam, in quam similique soluta corporis quo doloremque tenetur praesentium ipsum mollitia totam?</p>
                </div>
                <div>
                    <h1>Magnet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error molestias necessitatibus asperiores doloribus id aliquid delectus. Quisquam, in quam similique soluta corporis quo doloremque tenetur praesentium ipsum mollitia totam?</p>
                </div>
                <div>
                    <h1>Magnet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error molestias necessitatibus asperiores doloribus id aliquid delectus. Quisquam, in quam similique soluta corporis quo doloremque tenetur praesentium ipsum mollitia totam?</p>
                </div>
                <div>
                    <h1>Magnet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error molestias necessitatibus asperiores doloribus id aliquid delectus. Quisquam, in quam similique soluta corporis quo doloremque tenetur praesentium ipsum mollitia totam?</p>
                </div>
                <div>
                    <h1>Magnet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error molestias necessitatibus asperiores doloribus id aliquid delectus. Quisquam, in quam similique soluta corporis quo doloremque tenetur praesentium ipsum mollitia totam?</p>
                </div>
                <div>
                    <h1>Magnet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error molestias necessitatibus asperiores doloribus id aliquid delectus. Quisquam, in quam similique soluta corporis quo doloremque tenetur praesentium ipsum mollitia totam?</p>
                </div>

            </section>

        </div>
    );
};

export default About;