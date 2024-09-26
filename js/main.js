{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // JavaScript to add fade-in effect on scroll\
document.addEventListener('DOMContentLoaded', () => \{\
    const faders = document.querySelectorAll('.fade-in');\
\
    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) \{\
        entries.forEach(entry => \{\
            if (!entry.isIntersecting) \{\
                return;\
            \} else \{\
                entry.target.classList.add('show');\
                appearOnScroll.unobserve(entry.target);\
            \}\
        \});\
    \}, \{\
        threshold: 0.5\
    \});\
\
    faders.forEach(fader => \{\
        appearOnScroll.observe(fader);\
    \});\
\});}