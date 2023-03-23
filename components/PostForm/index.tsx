import { useCallback, useContext, useState } from 'react'
import React from 'react'

import styles from './PostForm.module.css'

import SessionContext from '@/contexts/SessionContext'

import type { Post } from '@/types/Post'

interface NewPost {
  feed: string
  content: string
}

interface Props {
  feed: string
  onNewPost: (newPost: Post) => void
}

interface ApiReqHeaders {
  'X-Eviratec-Token': string
  'Content-Type': string
}

export default function PostForm({ feed, onNewPost }: Props) {
  const session = useContext(SessionContext)

  const [content, setContent] = useState<string>('')
  const [link, setLink] = useState<string>('about:blank')
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSubmit = useCallback((event): void => {
    event.preventDefault()

    const c: NewPost = {
      feed: feed,
      content: content,
    }

    const headers = {
      'X-Eviratec-Token': session.currentSession.token,
      'Content-Type': 'application/json',
    }

    fetch('/api/post', { method: 'POST', body: JSON.stringify(c), headers: headers })
      .then((result) => {
        if (400 === result.status) {
          return result.json().then(json => {
            setSuccess(false)
            setError(json.message)
          })
        }
        setSuccess(true)
        setContent('')
        setLink('about:blank')

        result.json().then(json => {
          onNewPost(json)
        })
      })
      .catch((err) => {
        setSuccess(false)
        setError(err.message)
      })

  }, [feed, link, content, session])

  return (
    <div className={styles._}>
      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Start writing ..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}
