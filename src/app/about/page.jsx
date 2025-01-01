/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon, GitHubIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: `I'm VIKASH KUMAR KHARWAR, a full-stack developer and student at NIT MIZORAM,btech 3rd year.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1>Building Scalable Solutions, From Concept to Code.</h1>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Crafting Seamless Digital Experiences, From Frontend to Backend.          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm Vikash Kumar Kharwar, a passionate developer and AI enthusiast from India. My journey into the world of technology began with a curiosity for problem-solving and has since evolved into a deep interest in software development, machine learning, and robotics. I’m currently pursuing a B.Tech in Computer Science and Engineering at NIT Mizoram.
            </p>
            <p>
              Over the years, I’ve explored and mastered a range of technologies. Starting with basic web development using HTML and CSS, I progressed to full-stack development, leveraging the MERN stack to build impactful applications. My portfolio includes projects like a Student Result Management System, full-stack eCommerce platforms, and AI-driven image enhancement tools.
            </p>
            <p>
              My expertise extends to artificial intelligence and machine learning, where I’ve developed algorithms for low-light image enhancement, particularly for lunar PSR (Permanently Shadowed Region) analysis. This experience honed my skills in Python, OpenCV, and data analysis, while fueling my passion for space technology and research.
            </p>
            <p>
              I thrive on solving challenges, often debugging and learning independently using resources like Google and ChatGPT. Despite setbacks, I believe persistence is key, and each project pushes me to grow as a developer. My core skill set includes React, Node.js, Python, MongoDB, and MySQL, complemented by AI tools and frameworks like TensorFlow and Scikit-learn.
            </p>
            <p>
              Currently, I’m seeking opportunities with tech-focused companies where I can contribute to innovative projects in AI, web development, and robotics. My goal is to craft solutions that not only meet clients' needs but also drive technological progress in meaningful ways.
            </p>
          </div>

        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/vikash-kumar-kharwar-142157265/"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/VIKASH1596KUMARKHARWAR"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://x.com/VikashK60383009"
              icon={XIcon}
              className="mt-4"
            >
              Follow on X (Twitter)
            </SocialLink>
            <SocialLink
              href="mailto: vikash21596.nitmz@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              vikash21596.nitmz@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
