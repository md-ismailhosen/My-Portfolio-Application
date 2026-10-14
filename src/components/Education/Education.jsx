
import React from 'react';

const Education = () => {
    const education = [
        {
            title: 'Daffodil International University',
            degree: 'Bachelor of Science in Computer Science & Engineering',
            duration: 'Sep 2022 – Jun 2026',
            result: '2.82 / 4.00',
            resultLabel: 'CGPA',
            type: 'University',
            icon: 'fa-solid fa-graduation-cap',
            subjects: [
                'Data Structures & Algorithms',
                'Machine Learning',
                'Data Mining',
                'Computer Networks',
                'Operating Systems',
                'Database Systems',
                'Object-Oriented Programming',
                'Discrete Mathematics',
            ],
        },
        {
            title: 'Ideal College, Dhanmondi',
            degree: 'Higher Secondary Certificate (HSC) – Science',
            duration: '2019 – 2020',
            result: '3.75 / 5.00',
            resultLabel: 'GPA',
            type: 'College',
            icon: 'fa-solid fa-school',
            subjects: [
                'Physics',
                'Chemistry',
                'Higher Mathematics',
                'Biology',
                'Information & Communication Technology',
            ],
        },
    ];

    return (
        <section
            id="education"
            className="relative overflow-hidden bg-[#070d1b] px-4 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

            <div className="relative mx-auto max-w-5xl">

                {/* Section Header */}
                <div className="mb-14 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                        <i className="fa-solid fa-circle-user" />
                        My Academic Background
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Education{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            & Learning
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        My academic journey has helped me build a strong
                        foundation in computer science, software engineering,
                        algorithms, and emerging technologies.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>

                {/* Education Cards */}
                <div className="space-y-7">
                    {education.map((item, index) => (
                        <article
                            key={item.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06] sm:p-8"
                        >
                            {/* Top Gradient Border */}
                            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70 transition-opacity group-hover:opacity-100" />

                            <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">

                                {/* Institution Icon */}
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400 transition-colors group-hover:bg-blue-500/20">
                                    <i className={item.icon} />
                                </div>

                                {/* Education Details */}
                                <div className="min-w-0 flex-1">

                                    {/* Type & Duration */}
                                    <div className="mb-3 flex flex-wrap items-center gap-3">
                                        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                                            {item.type}
                                        </span>

                                        <span className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
                                            <i className="fa-regular fa-calendar" />
                                            {item.duration}
                                        </span>
                                    </div>

                                    {/* Institution Name */}
                                    <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-blue-300 sm:text-2xl">
                                        {item.title}
                                    </h3>

                                    {/* Degree */}
                                    <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                                        {item.degree}
                                    </p>

                                    {/* Academic Result */}
                                    <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-lg text-emerald-400">
                                            <i className="fa-solid fa-award" />
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Academic Result
                                            </p>
                                            <p className="text-sm font-bold text-emerald-300">
                                                {item.resultLabel}: {item.result}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Relevant Subjects */}
                                    <div className="mt-7">
                                        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
                                            <i className="fa-solid fa-book-open text-blue-400" />
                                            {index === 0
                                                ? 'Relevant Coursework'
                                                : 'Science Subjects'}
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {item.subjects.map((subject) => (
                                                <span
                                                    key={subject}
                                                    className="rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-xs leading-5 text-slate-300 transition-colors hover:border-blue-400/30 hover:text-blue-300 sm:text-sm"
                                                >
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-slate-500">
                        <i className="fa-solid fa-code mr-2 text-blue-400" />
                        Learning today, building tomorrow.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Education;
