
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipient = 'hossain@diu.edu.bd';

        const subject = encodeURIComponent(formData.subject);

        const body = encodeURIComponent(
            'Name: ' + formData.name +
            '\nEmail: ' + formData.email +
            '\n\nMessage:\n' + formData.message
        );

        const mailtoLink =
            'mailto:' + recipient +
            '?subject=' + subject +
            '&body=' + body;

        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: 'fa-solid fa-envelope',
            label: 'Email Address',
            value: 'hossain22205101797@diu.edu.bd',
            link: 'mailto:hossain@diu.edu.bd',
        },
        {
            icon: 'fa-solid fa-phone',
            label: 'Phone Number',
            value: '+880 1770780629',
            link: 'tel:+8801770780629',
        },
        {
            icon: 'fa-brands fa-github',
            label: 'GitHub',
            value: 'md-ismailhosen',
            link: 'https://github.com/md-ismailhosen',
        },
        {
            icon: 'fa-brands fa-linkedin',
            label: 'LinkedIn',
            value: 'Connect with me',
            link: 'https://www.linkedin.com/in/md-ismial/',
        },
    ];

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#070d1b] px-4 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                        <i className="fa-solid fa-paper-plane" />
                        Get In Touch
                    </div>

                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Let's Work{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Together
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        Have a project idea, collaboration opportunity, or
                        just want to say hello? Feel free to reach out.
                        I'd love to hear from you.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>

                {/* Contact Content */}
                <div className="grid gap-8 lg:grid-cols-5">
                    {/* Contact Information */}
                    <div className="lg:col-span-2">
                        <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
                            <h3 className="text-2xl font-bold">
                                Contact Information
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Let's discuss your next project, software
                                development ideas, or opportunities to work
                                together.
                            </p>

                            <div className="mt-8 space-y-4">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.link}
                                        target={
                                            item.link.startsWith('https')
                                                ? '_blank'
                                                : undefined
                                        }
                                        rel={
                                            item.link.startsWith('https')
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg text-blue-400 transition group-hover:bg-blue-500/20">
                                            <i className={item.icon} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs text-slate-400">
                                                {item.label}
                                            </p>

                                            <p className="mt-1 break-words text-sm font-medium text-slate-200 transition group-hover:text-blue-300">
                                                {item.value}
                                            </p>
                                        </div>

                                        <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500 transition group-hover:text-blue-400" />
                                    </a>
                                ))}
                            </div>

                            {/* Availability */}
                            <div className="mt-8 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-4">
                                <p className="flex items-center gap-3 text-sm font-medium text-emerald-300">
                                    <i className="fa-solid fa-circle-check" />
                                    Open to Opportunities
                                </p>

                                <p className="mt-2 text-xs leading-6 text-slate-400">
                                    Interested in web development,
                                    software engineering, and collaborative
                                    projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-8"
                        >
                            <h3 className="text-2xl font-bold">
                                Send Me a Message
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Fill out the form below to get in touch.
                            </p>

                            <div className="mt-7 grid gap-5 sm:grid-cols-2">
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What would you like to discuss?"
                                        className="w-full rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                                    />
                                </div>

                                {/* Message */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto"
                            >
                                Send Message
                                <i className="fa-solid fa-paper-plane" />
                            </button>

                            <p className="mt-4 text-xs leading-5 text-slate-500">
                                Submitting opens your default email application.
                                The message is not sent automatically.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-500">
                        Built with passion and{' '}
                        <i className="fa-solid fa-heart text-red-400" />{' '}
                        by{' '}
                        <span className="font-medium text-blue-400">
                            Md. Ismail Hosen
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
