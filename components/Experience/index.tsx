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
      end: new Date('Jan 1 2023')
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Block Ape Scissors'
    },
    period: {
      start: new Date('December 1 2021'),
      end: new Date('May 1 2022')
    }
  }, {
    title: 'Integration Engineer',
    employer: {
      name: 'LOKE'
    },
    period: {
      start: new Date('June 1 2021'),
      end: new Date('November 1 2021')
    }
  }, {
    title: 'WordPress Developer',
    employer: {
      name: 'Private Media'
    },
    period: {
      start: new Date('June 1 2020'),
      end: new Date('August 1 2020')
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Crocmedia Pty Ltd'
    },
    period: {
      start: new Date('August 1 2019'),
      end: new Date('March 1 2020')
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Volume New Media'
    },
    period: {
      start: new Date('November 1 2018'),
      end: new Date('February 1 2019')
    }
  }, {
    title: 'Senior Engineer',
    employer: {
      name: 'Versent'
    },
    period: {
      start: new Date('February 1 2016'),
      end: new Date('August 1 2016')
    }
  }, {
    title: 'Senior Software Developer',
    employer: {
      name: 'Rapid Finance'
    },
    period: {
      start: new Date('February 1 2015'),
      end: new Date('February 1 2016')
    }
  }, {
    title: 'Technical Lead',
    employer: {
      name: 'LOKE'
    },
    period: {
      start: new Date('July 1 2014'),
      end: new Date('January 1 2015')
    }
  }, {
    title: 'Frontend Developer',
    employer: {
      name: 'Deepend Digital (Melbourne)'
    },
    period: {
      start: new Date('March 1 2014'),
      end: new Date('June 1 2014')
    }
  }, {
    title: 'PHP Developer',
    employer: {
      name: 'SMSGlobal'
    },
    period: {
      start: new Date('November 1 2013'),
      end: new Date('February 1 2014')
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'DPHOTO'
    },
    period: {
      start: new Date('April 1 2013'),
      end: new Date('September 1 2013')
    }
  }, {
    title: 'Frontend Developer',
    employer: {
      name: 'Sportsbet'
    },
    period: {
      start: new Date('February 1 2013'),
      end: new Date('April 1 2013')
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'DPHOTO'
    },
    period: {
      start: new Date('January 1 2011'),
      end: new Date('February 1 2013')
    }
  }, {
    title: 'Web Developer',
    employer: {
      name: 'Network Video'
    },
    period: {
      start: new Date('February 1 2010'),
      end: new Date('October 1 2010')
    }
  }, {
    title: 'PHP Developer',
    employer: {
      name: '247ads Pty Ltd'
    },
    period: {
      start: new Date('March 1 2007'),
      end: new Date('January 1 2010')
    }
  }, {
    title: 'Webmaster',
    employer: {
      name: 'TheSims2Revolution'
    },
    period: {
      start: new Date('June 1 2003'),
      end: new Date('January 1 2004')
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
