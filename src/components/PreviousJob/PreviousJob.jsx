
import React from 'react';

const PreviousJob = () => {
    const previousJobs = [
        {
            type: 'WORK EXPERIENCE',
            title: 'Frontend Developer',
            company: 'Web Development Projects',
            duration: 'Project-Based Experience',
            description:
                'Developed responsive and interactive user interfaces using React, JavaScript, and Tailwind CSS. Focused on reusable components, modern designs, and smooth user experiences.',
            skills: ['React', 'JavaScript', 'Tailwind CSS'],
            icon: 'fa-solid fa-code',
            color: 'blue',
        },
        {
            type: 'DEVELOPMENT',
            title: 'Full-Stack Developer',
            company: 'Full-Stack Applications',
            duration: 'Project-Based Experience',
            description:
                'Explored full-stack application development, including frontend interfaces, REST API integration, authentication workflows, and database connectivity.',
            skills: ['React', 'Node.js', 'Express.js', 'MongoDB'],
            icon: 'fa-solid fa-laptop-code',
            color: 'purple',
        },
        {
            type: 'ACADEMIC PROJECT',
            title: 'Brain Tumor Detection',
            company: 'NeuroAI Project',
            duration: 'Deep Learning Project',
            description:
                'Developed a brain tumor classification project using deep learning and MRI images. Explored the Xception architecture, model evaluation, and explainable AI techniques.',
            skills: ['Python', 'TensorFlow', 'CNN', 'Xception'],
            icon: 'fa-solid fa-brain',
            color: 'emerald',
        },
        {
            type: 'COLLABORATION',
            title: 'Software Development Projects',
            company: 'Independent & Team Projects',
            duration: 'Project-Based Experience',
            description:
                'Worked on software development projects while practicing clean code, version control, problem-solving, and collaborative development workflows.',
            skills: ['Git', 'GitHub', 'Problem Solving'],
            icon: 'fa-solid fa-people-group',
            color: 'orange',
        },
    ];

    const colorStyles = {
        blue: {
            icon: 'bg-blue-500/10 text-blue-400 border-blue-400/20',
            badge: 'bg-blue-500/10 text-blue-300 border-blue-400/20',
            hover: 'hover:border-blue-400/40',
            glow: 'group-hover:text-blue-300',
        },
        purple: {
            icon: 'bg-purple-500/10 text-purple-400 border-purple-400/20',
            badge: 'bg-purple-500/10 text-purple-300 border-purple-400/20',
            hover: 'hover:border-purple-400/40',
            glow: 'group-hover:text-purple-300',
        },
        emerald: {
            icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20',
            badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
            hover: 'hover:border-emerald-400/40',
            glow: 'group-hover:text-emerald-300',
        },
        orange: {
            icon: 'bg-orange-500/10 text-orange-400 border-orange-400/20',
            badge: 'bg-orange-500/10 text-orange-300 border-orange-400/20',
            hover: 'hover:border-orange-400/40',
            glow: 'group-hover:text-orange-300',
        },
    };

    return (
        <section
            id="previous-job"
            className="relative overflow-hidden bg-[#070d1b] px-4 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[110px]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-14 text-center">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                        <i className="fa-solid fa-briefcase" />
                        Professional Journey
                    </span>

                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Previous Job{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        Explore my development projects, technical experience,
                        and learning journey in web development and artificial
                        intelligence. Each project has helped me strengthen my
                        technical skills and problem-solving abilities.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>

                {/* Previous Job Cards */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {previousJobs.map((job) => {
                        const styles = colorStyles[job.color];

                        return (
                            <article
                                key={job.title}
                                className={`group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055] sm:p-8 ${styles.hover}`}
                            >
                                {/* Icon and Category */}
                                <div className="flex items-start justify-between gap-4">
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-xl ${styles.icon}`}
                                    >
                                        <i className={job.icon} />
                                    </div>

                                    <span
                                        className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-wider sm:text-xs ${styles.badge}`}
                                    >
                                        {job.type}
                                    </span>
                                </div>

                                {/* Job Information */}
                                <h3
                                    className={`mt-6 text-xl font-bold transition sm:text-2xl ${styles.glow}`}
                                >
                                    {job.title}
                                </h3>

                                <p className="mt-2 text-sm text-slate-400">
                                    <i className="fa-solid fa-building mr-2 text-slate-500" />
                                    {job.company}
                                </p>

                                {/* Duration */}
                                <p className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500">
                                    <i className="fa-regular fa-calendar text-blue-400" />
                                    {job.duration}
                                </p>

                                {/* Description */}
                                <p className="mt-4 text-sm leading-7 text-slate-400">
                                    {job.description}
                                </p>

                                {/* Skills */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {job.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition hover:border-blue-400/30 hover:text-blue-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Experience Footer */}
                                <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                        <i className="fa-solid fa-check" />
                                    </span>

                                    <span className="text-xs font-medium text-slate-300">
                                        Skills & Experience Development
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-12 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/[0.08] to-purple-500/[0.08] p-7 text-center sm:p-10">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-400">
                        <i className="fa-solid fa-rocket" />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold">
                        Ready for New Challenges?
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
                        I am interested in learning new technologies,
                        contributing to meaningful projects, and collaborating
                        with teams to build innovative software solutions.
                    </p>

                    <a
                        href="#contact"
                        className="mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500"
                    >
                        Let's Connect
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PreviousJob;
