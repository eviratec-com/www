import React from 'react'

import JobCard from './JobCard'

import styles from './Experience.module.css'

import type Job from '@/types/Job'

export default function Experience() {
  const jobs: Job[] = [
    {
    title: 'Full Stack Engineer',
    employer: {
      name: 'Nova Entertainment'
    },
    period: {
      start: new Date('July 1 2022'),
      end: new Date('Jan 1 2023'),
      duration: '6 months'
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Block Ape Scissors'
    },
    period: {
      start: new Date('December 1 2021'),
      end: new Date('May 1 2022'),
      duration: '6 months'
    }
  }, {
    title: 'Integration Engineer',
    employer: {
      name: 'LOKE'
    },
    period: {
      start: new Date('June 1 2021'),
      end: new Date('November 1 2021'),
      duration: '5 months'
    }
  }, {
    title: 'WordPress Developer',
    employer: {
      name: 'Private Media'
    },
    period: {
      start: new Date('June 1 2020'),
      end: new Date('August 1 2020'),
      duration: '3 months'
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Crocmedia Pty Ltd'
    },
    period: {
      start: new Date('August 1 2019'),
      end: new Date('March 1 2020'),
      duration: '8 months'
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Volume New Media'
    },
    period: {
      start: new Date('November 1 2018'),
      end: new Date('February 1 2019'),
      duration: '4 months'
    }
  }, {
    title: 'Senior Engineer',
    employer: {
      name: 'Versent'
    },
    period: {
      start: new Date('February 1 2016'),
      end: new Date('August 1 2016'),
      duration: '7 months'
    }
  }, {
    title: 'Senior Software Developer',
    employer: {
      name: 'Rapid Finance'
    },
    period: {
      start: new Date('February 1 2015'),
      end: new Date('February 1 2016'),
      duration: '1 year'
    }
  }, {
    title: 'Technical Lead',
    employer: {
      name: 'LOKE'
    },
    period: {
      start: new Date('July 1 2014'),
      end: new Date('January 1 2015'),
      duration: '7 months'
    }
  }, {
    title: 'Frontend Developer',
    employer: {
      name: 'Deepend Digital (Melbourne)'
    },
    period: {
      start: new Date('March 1 2014'),
      end: new Date('June 1 2014'),
      duration: '4 months'
    }
  }, {
    title: 'PHP Developer',
    employer: {
      name: 'SMSGlobal'
    },
    period: {
      start: new Date('November 1 2013'),
      end: new Date('February 1 2014'),
      duration: '4 months'
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'DPHOTO'
    },
    period: {
      start: new Date('April 1 2013'),
      end: new Date('September 1 2013'),
      duration: '6 months'
    }
  }, {
    title: 'Frontend Developer',
    employer: {
      name: 'Sportsbet'
    },
    period: {
      start: new Date('February 1 2013'),
      end: new Date('April 1 2013'),
      duration: '3 months'
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'DPHOTO'
    },
    period: {
      start: new Date('January 1 2011'),
      end: new Date('February 1 2013'),
      duration: '2 years'
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Network Video'
    },
    period: {
      start: new Date('February 1 2010'),
      end: new Date('October 1 2010'),
      duration: '9 months'
    }
  }, {
    title: 'PHP Developer',
    employer: {
      name: '247ads Pty Ltd'
    },
    period: {
      start: new Date('March 1 2007'),
      end: new Date('January 1 2010'),
      duration: '3 years'
    }
  }, {
    title: 'Webmaster',
    employer: {
      name: 'TheSims2Revolution'
    },
    period: {
      start: new Date('June 1 2003'),
      end: new Date('January 1 2004'),
      duration: '7 months'
    }
  }]

  return (
    <div className={styles._}>
      {jobs.map((job: Job, i: number) => {
        return (
          <div className={styles.job} key={i}>
            <JobCard job={job} />
          </div>
        )
      })}
    </div>
  )
}
