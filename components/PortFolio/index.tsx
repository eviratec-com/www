import React from 'react'

import ProjectCard from './ProjectCard'

import styles from './PortFolio.module.css'

import type Project from '@/types/Folio'

export default function PortFolio() {
  const projects: Project[] = [{
    title: 'AJAX Contact WP Plugin',
    tech: ['WordPress', 'PHP', 'JavaScript'],
    image: '/folio/2012-ajax-contact.jpg',
    description: '',
    year: 2012
  }, {
    title: 'AJAX Contact WP Plugin',
    tech: ['WordPress', 'PHP', 'JavaScript'],
    image: '/folio/2012-ajax-contact-config.jpg',
    description: '',
    year: 2012
  }, {
    title: 'Ministry of Style',
    tech: ['WordPress', 'PHP', 'JavaScript'],
    image: '/folio/2015-mos-www.jpeg',
    description: '',
    year: 2015
  }, {
    title: 'Ministry of Style',
    tech: ['WordPress', 'PHP'],
    image: '/folio/2015-mos-store.jpeg',
    description: '',
    year: 2015
  }, {
    title: 'App Builder Prototype',
    tech: ['Node-Webkit (NW.js)', 'Node.js', 'AngularJS'],
    image: '/folio/2017-app-builder.jpeg',
    description: '',
    year: 2017
  }, {
    title: 'Nautilus Replacement',
    tech: ['Node-Webkit (NW.js)', 'Node.js', 'AngularJS'],
    image: '/folio/2017-nautilus-replacement.jpeg',
    description: '',
    year: 2017
  }, {
    title: 'DataStudio',
    tech: ['WordPress', 'PHP'],
    image: '/folio/2018-datastudio-wp.jpeg',
    description: '',
    year: 2018
  }, {
    title: 'Eviratec Life Log',
    tech: ['WordPress', 'PHP'],
    image: '/folio/2018-eviratec-track.jpeg',
    description: '',
    year: 2018
  }, {
    title: 'Eviratec Homepage',
    tech: ['WordPress', 'PHP'],
    image: '/folio/2018-eviratec-www.jpeg',
    description: '',
    year: 2018
  }, {
    title: 'Life Log Web Apps',
    tech: ['Node.js', 'AngularJS', 'MySQL'],
    image: '/folio/2019-log-webapps.jpeg',
    description: '',
    year: 2019
  }, {
    title: 'MoneyLog',
    tech: ['Node.js', 'AngularJS', 'MySQL'],
    image: '/folio/2019-moneylog.jpeg',
    description: '',
    year: 2019
  }, {
    title: 'MyJournal',
    tech: ['Node.js', 'AngularJS', 'MySQL'],
    image: '/folio/2019-myjournal.jpeg',
    description: '',
    year: 2019
  }].reverse()

  return (
    <div className={styles._}>
      {projects.map((project: Job, i: number) => {
        return (
          <div className={styles.project} key={i}>
            <ProjectCard project={project} />
          </div>
        )
      })}
    </div>
  )
}
