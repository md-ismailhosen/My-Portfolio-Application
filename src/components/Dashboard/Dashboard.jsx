import React from "react";
import profileImage from '../images/ismail.JPG';
export default function Dashboard() {
    const stats = [
        { title: "Projects", value: "25+" },
        { title: "GitHub Repo", value: "40+" },
        { title: "Technologies", value: "18+" },
        { title: "Experience", value: "2.5 Years" },
    ];

    const skills = [
        { name: "React.js", level: "90%" },
        { name: "JavaScript", level: "85%" },
        { name: "Node.js", level: "75%" },
        { name: "MongoDB", level: "70%" },
    ];

    const projects = [
        {
            image: "https://media.istockphoto.com/id/1411225550/photo/portrait-of-teenage-girl-petting-golden-retriever-outside-in-sunset.jpg?s=612x612&w=0&k=20&c=61X2FfwSSyaL9TCXWjKyEdqTxUlOdqD_IM6BaHhlDHc=",
            title: "PetCare Mobile App",
            tech: "Flutter, Firebase, MongoDB",
            status: "Completed",
            project_live_demo: "",
            github_link: "",
        },

        {

            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
            title: "Portfolio Web Application",
            tech: " React, JavaScript, Tailwind CSS",
            status: "Running",
            project_live_demo: "",
            github_link: "",
        },

        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
            title: "Chat Application",
            tech: "Socket.io, Express",
            status: "Completed",
            project_live_demo: "",
            github_link: "",
        },
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
            title: "Chat Application",
            tech: "Socket.io, Express",
            status: "Completed",
            project_live_demo: "",
            github_link: "",
        },
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
            title: "Chat Application",
            tech: "Socket.io, Express",
            status: "Completed",
            project_live_demo: "",
            github_link: "",
        },
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
            title: "Chat Application",
            tech: "Socket.io, Express",
            status: "Completed",
            project_live_demo: "",
            github_link: "",
        },
    ];

    return (
        <div>
            <section>
                <div className="">
                    <img className='profileImage ml-16' src={profileImage} alt='profile image'></img>
                    <div className='name'>
                        <h1 className='names'>Md.Ismail Hosen</h1>
                        <h1 className='se text-orange-300'>Software Engineer</h1>
                        <p className='see text-orange-300'>Engineering high-performance applications, scalable systems, and meaningful products.</p>
                    </div>

                </div>

            </section>
            <section className=" rounded-t-[10px]">
                <div className="rounded-t-[10px] min-h-screen bg-slate-950 text-white flex">

                    {/* Sidebar */}
                    {/* <aside className="w-64 h-50 bg-slate-900 p-6 hidden lg:block">
                <h1 className="text-3xl font-bold text-cyan-400 mb-10">
                    ISMAIL
                </h1>

                <nav className="space-y-4">
                    <a href="#" className="block hover:text-cyan-400">
                        Dashboard
                    </a>

                    <a href="#" className="block hover:text-cyan-400">
                        Profile
                    </a>

                    <a href="#" className="block hover:text-cyan-400">
                        Projects
                    </a>

                    <a href="#" className="block hover:text-cyan-400">
                        Skills
                    </a>

                    <a href="#" className="block hover:text-cyan-400">
                        Contact
                    </a>
                </nav>
            </aside>  */}

                    {/* Main */}
                    <main className="border-t-2 border-cyan-500 flex-1 p-6 bg-gray-700">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="text-4xl font-bold">
                                    Developer Dashboard
                                </h2>

                                <p className="text-slate-400 mt-2">
                                    Welcome back 👋
                                </p>
                            </div>

                            <button className=" border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 bg-cyan-500 text-black px-5 py-3 rounded-xl font-semibold hover:bg-cyan-400">
                                Download CV
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="project border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 bg-slate-900 p-6 rounded-2xl shadow-lg"
                                >
                                    <p className="text-slate-400">
                                        {item.title}
                                    </p>

                                    <h3 className=" text-4xl font-bold text-cyan-400 mt-3">
                                        {item.value}
                                    </h3>

                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        {/* Skills Section */}
                        <div className="  bg-slate-900 p-8 rounded-2xl mb-10 ">
                            <h3 className="text-3xl font-bold mb-8 text-cyan-400">
                                Skills Progress
                            </h3>


                            <div className="gap-5 h-auto w-auto">
                                {/* Professional Skills */}
                                <div className="border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 p-4 rounded-xl mb-10 border-2 p-5">
                                    <h4 className="text-2xl font-semibold mb-6">
                                        Professional Skills
                                    </h4>

                                    <div className="space-y-6">
                                        {[
                                            { name: "Application Development", level: "95%" },
                                            { name: "System Design", level: "88%" },
                                            { name: "Cloud Engineering", level: "82%" },
                                            { name: "Full-Stack Development", level: "94%" },
                                            { name: "REST APIs", level: "90%" },
                                            { name: "React Router", level: "92%" },
                                            { name: "Database Design", level: "85%" },
                                            { name: "Scalable Backend Systems", level: "80%" },
                                            { name: "Cloud Infrastructure", level: "78%" },
                                            { name: "UI/UX Engineering", level: "89%" },
                                            { name: "Performance Optimization", level: "84%" },
                                            { name: "DevOps & Deployment", level: "76%" },
                                            { name: "AI Integration", level: "95%" },
                                        ].map((skill, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-medium">
                                                        {skill.name}
                                                    </span>

                                                    <span className="text-cyan-400">
                                                        {skill.level}
                                                    </span>
                                                </div>

                                                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700"
                                                        style={{ width: skill.level }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technical Skills */}
                                <div className="border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 p-4 rounded-xl border-2 p-5">
                                    <h4 className="text-2xl font-semibold mb-6">
                                        Technical Skills
                                    </h4>

                                    <div className="space-y-6">
                                        {[
                                            { name: "C", level: "98%" },
                                            { name: "C++", level: "98%" },
                                            { name: "JAVA", level: "98%" },
                                            { name: "SQL", level: "98%" },
                                            { name: "HTML", level: "98%" },
                                            { name: "CSS", level: "95%" },
                                            { name: "JavaScript", level: "92%" },
                                            { name: "React", level: "90%" },
                                            { name: "Firebase", level: "95%" },
                                            { name: "Node.js", level: "82%" },
                                            { name: "Python", level: "90%" },
                                            { name: "Algorithome", level: "75%" },
                                            { name: "Flutter", level: "60%" },

                                        ].map((skill, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-medium">
                                                        {skill.name}
                                                    </span>

                                                    <span className="text-cyan-400">
                                                        {skill.level}
                                                    </span>
                                                </div>

                                                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-700"
                                                        style={{ width: skill.level }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Projects */}
                        <div className="project-card bg-slate-800 ">
                            <h3 className="text-3xl font-bold mb-6">
                                Recent Projects
                            </h3>

                            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {projects.map((project, index) => (
                                    <div key={index} className="project bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
                                        <div>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-56 object-cover"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <h4 className="text-xl font-bold">
                                                    {project.title}
                                                </h4>

                                                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                                                    {project.status}
                                                </span>

                                            </div>


                                            <p className="text-slate-400">
                                                {project.tech}
                                            </p>


                                            <div className="flex gap-4 mt-6">
                                                <button className="bg-cyan-500 text-black px-4 py-2 rounded-xl font-semibold">
                                                    Live Demo

                                                </button>


                                                <button className="border border-slate-700 px-4 py-2 rounded-xl">
                                                    GitHub
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
}