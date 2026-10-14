
import React from 'react';

const Skill = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            description: 'Core programming and software development.',
            icon: 'fa-solid fa-code',
            color: 'blue',
            skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'C'],
        },
        {
            title: 'Libraries & Frameworks',
            description: 'Modern frameworks for web application development.',
            icon: 'fa-solid fa-layer-group',
            color: 'purple',
            skills: ['React.js', 'Next.js', 'Express.js'],
        },
        {
            title: 'Frontend Development',
            description: 'Building responsive and interactive user interfaces.',
            icon: 'fa-solid fa-display',
            color: 'cyan',
            skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js'],
        },
        {
            title: 'Backend Development',
            description: 'Server-side logic, APIs, and authentication systems.',
            icon: 'fa-solid fa-server',
            color: 'emerald',
            skills: [
                'Node.js',
                'REST APIs',
                'JWT',
                'Prisma ORM',
                'Mongoose ODM',
                'Redis',
            ],
        },
        {
            title: 'Databases',
            description: 'Database design and application data management.',
            icon: 'fa-solid fa-database',
            color: 'orange',
            skills: ['MongoDB', 'MySQL'],
        },
        {
            title: 'AI & Deep Learning',
            description: 'Deep learning models and brain MRI image classification.',
            icon: 'fa-solid fa-brain',
            color: 'pink',
            skills: [
                'TensorFlow',
                'Keras',
                'CNN',
                'Transfer Learning',
                'Grad-CAM',
                'TensorFlow.js',
            ],
        },
        {
            title: 'Tools & Platforms',
            description: 'Tools for development, testing, and collaboration.',
            icon: 'fa-solid fa-screwdriver-wrench',
            color: 'indigo',
            skills: [
                'Git',
                'GitHub',
                'Docker',
                'Postman',
                'VS Code',
                'Cloudinary',
                'MongoDB Compass',
                'MySQL Workbench',
            ],
        },
        {
            title: 'Computer Science',
            description: 'Foundational knowledge for solving technical problems.',
            icon: 'fa-solid fa-lightbulb',
            color: 'yellow',
            skills: [
                'Data Structures',
                'Algorithms',
                'OOP',
                'Machine Learning',
                'Database Systems',
                'Problem Solving',
            ],
        },
    ];

    const colorStyles = {
        blue: {
            icon: 'bg-blue-500/10 text-blue-400 border-blue-400/20',
            badge: 'bg-blue-500/10 text-blue-300 border-blue-400/20',
            hover: 'hover:border-blue-400/40',
            title: 'group-hover:text-blue-300',
        },
        purple: {
            icon: 'bg-purple-500/10 text-purple-400 border-purple-400/20',
            badge: 'bg-purple-500/10 text-purple-300 border-purple-400/20',
            hover: 'hover:border-purple-400/40',
            title: 'group-hover:text-purple-300',
        },
        cyan: {
            icon: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20',
            badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20',
            hover: 'hover:border-cyan-400/40',
            title: 'group-hover:text-cyan-300',
        },
        emerald: {
            icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20',
            badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
            hover: 'hover:border-emerald-400/40',
            title: 'group-hover:text-emerald-300',
        },
        orange: {
            icon: 'bg-orange-500/10 text-orange-400 border-orange-400/20',
            badge: 'bg-orange-500/10 text-orange-300 border-orange-400/20',
            hover: 'hover:border-orange-400/40',
            title: 'group-hover:text-orange-300',
        },
        pink: {
            icon: 'bg-pink-500/10 text-pink-400 border-pink-400/20',
            badge: 'bg-pink-500/10 text-pink-300 border-pink-400/20',
            hover: 'hover:border-pink-400/40',
            title: 'group-hover:text-pink-300',
        },
        indigo: {
            icon: 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20',
            badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/20',
            hover: 'hover:border-indigo-400/40',
            title: 'group-hover:text-indigo-300',
        },
        yellow: {
            icon: 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20',
            badge: 'bg-yellow-500/10 text-yellow-300 border-yellow-400/20',
            hover: 'hover:border-yellow-400/40',
            title: 'group-hover:text-yellow-300',
        },
    };

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#070d1b] px-4 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />
            <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[110px]" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-600/10 blur-[110px]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-14 text-center">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                        <i className="fa-solid fa-code" />
                        Technical Expertise
                    </span>

                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        My Technical{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        Explore my technical skills in full-stack development,
                        backend engineering, database management, and artificial
                        intelligence.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>

                {/* Skills Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category) => {
                        const styles = colorStyles[category.color];

                        return (
                            <article
                                key={category.title}
                                className={`group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055] sm:p-7 ${styles.hover}`}
                            >
                                {/* Icon and Count */}
                                <div className="flex items-start justify-between gap-4">
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-xl ${styles.icon}`}
                                    >
                                        <i className={category.icon} />
                                    </div>

                                    <span
                                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${styles.badge}`}
                                    >
                                        {category.skills.length} Skills
                                    </span>
                                </div>

                                {/* Category Title */}
                                <h3
                                    className={`mt-6 text-xl font-bold transition ${styles.title}`}
                                >
                                    {category.title}
                                </h3>

                                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                                    {category.description}
                                </p>

                                {/* Skill Badges */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Card Footer */}
                                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    <span className="text-xs text-slate-500">
                                        Technical Skill Set
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
                        Turning Skills into{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
                        I enjoy building modern web applications, developing
                        reliable backend systems, and exploring AI-powered
                        solutions to real-world problems.
                    </p>

                    <a
                        href="#projects"
                        className="mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500"
                    >
                        Explore My Projects
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skill;
