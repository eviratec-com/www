import React from 'react'

import Link from 'next/link'

import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles._}>
      <p>
        We&apos;re an Australian web development business, specialising in
        full-stack web application development and DevOps. We provide a number
        of services and products, including a white-label Social Network
        solution.
      </p>

      <p>
        <Link href="mailto:info@eviratec.com">Contact us</Link> for more
        information, about our professional web application design, development,
        and devops services.
      </p>

      <h3>What we do</h3>

      <p>
        We create websites, web apps, native apps, web apis, and micro-services;
        with extensive experience around high-availability multimedia uploads,
        and processing. We have experience creating photo upload and processing
        solutions in Microsoft Azure, and Amazon Web Services (AWS).
      </p>

      <p>
        We love building serverless functions, aka: AWS Lambdas; or Azure App
        Functions.
      </p>

      <p>
        We also provide general website and app development services, including:
        updating pages, and websites.
      </p>

      <h3>Preferred Technology</h3>

      <p>We prefer to use the following technologies:</p>

      <ul>
        <li>React.js and Angular</li>
        <li>Java, TypeScript, JavaScript, PHP and Python</li>
        <li>Django, Node.js, Express.js and Spring</li>
        <li>MySQL, PostgreSQL, MongoDB and DynamoDB</li>
        <li>Amazon Web Services and Microsoft Azure</li>
      </ul>
    </div>
  )
}
