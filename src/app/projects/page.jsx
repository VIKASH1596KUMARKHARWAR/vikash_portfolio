import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import zapier from '@/images/logos/zapier.png'
import SmartEnergy from '@/images/logos/smartenergy.svg'
import exc from '@/images/logos/exc.jpeg'
import py from '@/images/logos/py.png'
import HouseToPic from '@/images/logos/housetopic.svg'
import AudioAesthetics from '@/images/logos/audioAesthetics.svg'
import SaviCandle from '@/images/logos/savicandle.svg'
import e from '@/images/logos/image.png'
import g from '@/images/logos/g.png'

import EVC from '@/images/logos/evc.svg'

const projects = [
  {
    name: 'Zapier-Lite',
    description:
      "Zapier-Lite is a simplified automation platform inspired by Zapier. It focuses on ensuring atomicity in workflows using a transactional outbox pattern. The platform supports webhooks, email actions, and Solana-based bounty payouts, powered by Kafka for a robust event-driven architecture.",
    link: {
      href: 'https://github.com/VIKASH1596KUMARKHARWAR/Zapier-Lite',
      label: 'zapier-lite-github',
    },
    logo: zapier,
  },
  {
    name: 'CryptoTradeX ',
    description:
      'This project implements a high-performance cryptocurrency exchange system focusing on scalability, concurrency, and real-time data updates. The architecture leverages modern technologies like Redis, TimescaleDB, and WebSockets to deliver efficient trading capabilities',
    link: {
      href: 'https://github.com/VIKASH1596KUMARKHARWAR/CryptoTradeX',
      label: 'CryptoTradeX-github',
    },
    logo: exc,
  },
  {
    name: 'paytm-payment-gateway',
    description:
      'Developed a comprehensive digital payment platform that facilitates secure and seamless financial transactions for both users and merchants. The application supports features like user authentication, bank transactions, and merchant-specific operations, making it a versatile tool for financial managemen',
    link: { href: 'https://housetopic.com.au/', label: 'housetopic.com.au' },
    logo: py,
  },
  {
    name: 'Student-result-management ',
    description:
'Developed a secure platform for managing student records, academic reports, attendance, and performance analysis, enhancing data accuracy, communication, and efficiency for faculty and administrators through an online interface.'
,    link: {
      href: 'https://github.com/VIKASH1596KUMARKHARWAR/Student-result-management',
      label: 'srms-github',
    },
    logo: AudioAesthetics,
  },
  {
    name: 'Ecommerce - Frontend',
    description:
      'Developed a dynamic e-commerce website frontend using HTML, CSS, JavaScript, and React.js',
    link: {
      href: 'https://easy-buy-g.netlify.app/',
      label: 'easy-buy-g.netlify.app',
    },
    logo: e,
  },
  {
    name: 'GitFinder',
    description:
      'app with simple-ui that help you to find the github account of any person.',
    link: {
      href: 'https://git-finder1103.netlify.app/',
      label: 'easy-buy-g.netlify.app',
    },
    logo: g,
  },
  
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Apps I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Apps I've created in an effort to make my mark on the universe."
      intro="I’ve worked on numerous  web apps over the years, but these are the ones I'm most proud of. Take a look at the designs, and feel free to email me with any suggestions on how I can improve."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
