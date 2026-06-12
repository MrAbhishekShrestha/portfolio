"use client";

import { useState } from "react";

export default function Intro() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="overview" className="w-full pt-8 pb-6 transition-colors duration-200">
      {/* Profile Header Grid */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        {/* Profile Avatar */}
        <div className="relative group shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-border-default overflow-hidden bg-canvas-subtle flex items-center justify-center shadow-sm">
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/avatar.jpeg"
                alt="Abhishek Shrestha"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              // GitHub Silhouette Octocat style fallback
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-16 h-16 sm:w-20 sm:h-20 text-fg-muted"
                aria-hidden="true"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0-2.21-3.58-4-6-4s-6 1.79-6 4v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1Zm-1 .12c-.08-.47-2.31-3.12-5-3.12-2.7 0-4.93 2.64-5 3.12v.38h10v-.38Z" />
              </svg>
            )}
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg-default">
            Abhishek Shrestha
          </h1>
          <p className="text-base text-fg-default mb-4">
            Software Engineer
          </p>

          {/* Contact Links & Location */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-fg-muted font-mono mt-2">
            <a
              href="https://linkedin.com/in/abhishekshrestha100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent-fg transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/MrAbhishekShrestha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent-fg transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="mailto:abhishek.shr2000@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-accent-fg transition-colors"
            >
              <span>✉️</span>
              <span>Email</span>
            </a>
            <span className="text-fg-muted/30 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1 text-fg-muted">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path d="M11.536 3.464a5 5 0 0 0-7.072 0L3.879 4.05a.25.25 0 0 0 .049.368l2.9 2.176a.75.75 0 0 1-.9 1.2l-2.9-2.176a1.75 1.75 0 0 1-.343-2.576l.585-.586a6.5 6.5 0 0 1 9.192 0l.586.586a1.75 1.75 0 0 1-.343 2.576l-2.9 2.176a.75.75 0 0 1-.9-1.2l2.9-2.176a.25.25 0 0 0 .049-.368l-.585-.586Z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
              </svg>
              Edinburgh, Scotland
            </span>
          </div>
        </div>
      </div>

      {/* GitHub Profile README Panel */}
      <div className="w-full border border-border-default rounded-md bg-canvas-default overflow-hidden shadow-sm">
        {/* Panel Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-default bg-canvas-subtle text-xs font-mono text-fg-muted">
          <div className="flex items-center gap-2">
            {/* Book/File Icon */}
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3.5 h-3.5 text-fg-muted"
            >
              <path d="M4 1.75V0h2v1.75a.25.25 0 0 0 .25.25h1.5a.25.25 0 0 0 .25-.25V0h2v1.75c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V0h1.75c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 13.75 16H2.25A1.75 1.75 0 0 1 .5 14.25V1.75C.5.784 1.284 0 2.25 0H4a.75.75 0 0 1 .75.75v1a.25.25 0 0 0 .25.25h1.5A.25.25 0 0 0 7 1.75V.75A.75.75 0 0 1 7.75 0H9.5a.75.75 0 0 1 .75.75v1a.25.25 0 0 0 .25.25h1.5a.25.25 0 0 0 .25-.25V.75a.75.75 0 0 1 .75-.75H13.75c.414 0 .75.336.75.75v12.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V1.75c0-.414.336-.75.75-.75H4c.414 0 .75.336.75.75Z" />
            </svg>
            <span className="font-semibold text-fg-default">MrAbhishekShrestha</span>
            <span>/</span>
            <span>README.md</span>
          </div>
          {/* Edit icon */}
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-3.5 h-3.5 text-fg-muted hover:text-accent-fg cursor-pointer"
          >
            <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25a1.75 1.75 0 0 1 .445-.758l8.61-8.61Zm1.414 1.06a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354l-1.086-1.086ZM11.189 6.25 9.75 4.81 3.447 11.112a.25.25 0 0 0-.064.108l-.513 1.797 1.797-.513a.25.25 0 0 0 .108-.064L11.19 6.25Z" />
          </svg>
        </div>

        {/* Panel Body */}
        <div className="p-6 sm:p-8 prose dark:prose-invert max-w-none text-fg-default">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-border-default pb-2 mb-4">
            Hi, I&apos;m Abhi!
          </h2>

          <ul className="space-y-3 pl-5 list-disc text-sm sm:text-base leading-relaxed">
            <li>
              Full-stack software engineer 👨🏻‍💻 based in{" "}
              <span className="font-semibold">Edinburgh, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
            </li>
            <li>
              I enjoy taking ownership end-to-end, working closely with customers, 
              and holding a high bar for quality while building products that 
              create real business impact.
            </li>
            <li>
              Currently building multiple exciting AI-powered products from 0 to 1 at{" "}
              <a
                href="https://loopsio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-fg font-semibold hover:underline"
              >
                Loopsio
              </a>.
            </li>
            <li>
              Previously at{" "}
              <a
                href="https://wavelet.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-fg font-semibold hover:underline"
              >
                Wavelet
              </a> &{" "}
              <a
                href="https://bigledger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-fg font-semibold hover:underline"
              >
                BigLedger
              </a>
              , where I worked on{" "}
              <a
                href="https://akaun.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-fg font-semibold hover:underline"
              >
                Akaun
              </a>
              , a
              cloud-native B2B ERP platform 
              ({""}
              <a
                href="https://odoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-fg font-semibold hover:underline"
              >
                odoo
              </a>&apos;s competitor) 
              used by hundreds of businesses
              across South East Asia and processing millions of transactions/month.
            </li>
            <li>
              Originally from Kathmandu, Nepal 🇳🇵. When I&apos;m not at my keyboard, I&apos;m probably out hiking the Scottish Highlands 🏔️
            </li>
          </ul>


        </div>
      </div>
    </section>
  );
}
