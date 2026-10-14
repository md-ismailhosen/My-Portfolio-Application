
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="footer">
            <footer className="bg-gray-950/70 border-t border-slate-800/80 backdrop-blur-sm text-gray-300 text-sm">
                <div className="px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr]">

                        {/* About */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                                iSMAIL
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-4">
                                Official website of{' '}
                                <strong className="text-gray-200">
                                    Ismail Hosen
                                </strong>{' '}
                                (also appearing online as{' '}
                                <span className="italic">Magnet Ismail</span>
                                ). Software Engineer and Professional Web
                                &amp; App Developer focused on scalable
                                full-stack applications, modern mobile
                                solutions, and cloud technologies.
                            </p>

                            <p className="text-[12px] text-gray-500">
                                © 2026 iSMAIL. All rights reserved.
                            </p>
                        </div>

                        {/* Navigation */}
                        <nav aria-label="Site sections" className="space-y-2">
                            <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                                Navigate
                            </h4>

                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        to="/"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/about"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Profiles */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                                Profiles
                            </h4>

                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="https://github.com/md-ismailhosen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/md-ismial/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Focus Areas */}
                        <div className="hidden lg:block space-y-2">
                            <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                                Focus Areas
                            </h4>

                            <ul className="space-y-1">
                                <li className="text-gray-400">
                                    Android (Java/Kotlin)
                                </li>
                                <li className="text-gray-400">
                                    Cloud (AWS / Azure / Oracle / Appwrite)
                                </li>
                                <li className="text-gray-400">
                                    APIs &amp; System Design
                                </li>
                                <li className="text-gray-400">
                                    Python / AI Enhancement
                                </li>
                                <li className="text-gray-400">
                                    React &amp; Frontend Performance
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Utility links */}
                    <div className="sr-only">
                        <nav aria-label="Utility links">
                            <a href="/sitemap.xml">Sitemap</a>
                            <a href="/robots.txt">Robots</a>
                            <a href="/#about">About</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
