import React from 'react';
import { Links } from 'react-router';

const Footer = () => {

    return (
        <div className='footer '>
            {Links}
            <div>
                <footer class=" bg-gray-950/70 border-t border-slate-800/80 backdrop-blur-sm text-gray-300 text-sm" role="contentinfo">
                    <div class="   px-4 sm:px-6 lg:px-8 py-10">
                        <div class=" grid gap-10 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr]">
                            <div><h3 class="text-lg font-semibold text-white mb-3 tracking-wide">iSMAIL</h3>
                                <p class="text-gray-400 leading-relaxed mb-4">Official website of <strong class="text-gray-200">Ismail Hosen</strong> (also appearing online as <span class="italic">Magnet Ismail,</span>). Software Engineer Professional Web & App Developer focused on scalable full-stack applications, modern mobile solutions, and cloud technologies.</p>
                                <p class="text-[12px] text-gray-500">© 2026 iSMAIL. All rights reserved.</p>
                            </div>
                            <nav aria-label="Site sections" class="space-y-2">
                                <h4 class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Navigate</h4>
                                <ul class="space-y-1">
                                    <li>
                                        <a href="/" class="hover:text-orange-400 transition-colors">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about" class="hover:text-orange-400 transition-colors">About</a>
                                    </li>
                                    <li><a href="/dashboard" class="hover:text-orange-400 transition-colors">Dashboard</a>
                                    </li>
                                    
                                </ul>
                            </nav>
                            <div class="space-y-2">
                                <h4 class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Profiles</h4>
                                <ul class="space-y-1">
                                    <li>
                                        <a rel="me" href="https://github.com/md-ismailhosen?tab=stars" target="_blank" class="hover:text-blue-400 transition-colors">GitHub</a>
                                    </li>
                                    <li>
                                        <a rel="me" href="https://www.linkedin.com/in/md-ismial/" target="_blank" class="hover:text-blue-400 transition-colors">LinkedIn</a>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                            <div class="hidden lg:block space-y-2">
                                <h4 class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Focus Areas</h4>
                                <ul class="space-y-1">
                                    <li class="text-gray-400">Android (Java/Kotlin)</li>
                                    <li class="text-gray-400">Cloud (AWS / Azure / Oracle / Appwrite)</li>
                                    <li class="text-gray-400">APIs &amp; System Design</li>
                                    <li class="text-gray-400">Python / AI Enhancement</li>
                                    <li class="text-gray-400">React &amp; Frontend Performance</li>
                                </ul>
                            </div>
                        </div>
                        <div class="sr-only" aria-hidden="false">
                            <p>Structured data &amp; identity signals optimized for search disambiguation.</p>
                            <nav aria-label="Utility links">
                                <a href="/sitemap.xml">Sitemap</a>
                                <a href="/robots.txt">Robots</a>
                                <a href="/#about">About</a>
                            </nav>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;