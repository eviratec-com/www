import { useCallback, useState } from 'react'
import React from 'react'

import styles from './PostForm.module.css'

import type { Post } from '@/types/Post'

interface NewPost {
  content: string
  link: string
}

interface Props {
  onNewPost: (newPost: Post) => void
}

export default function PostForm({ onNewPost }: Props) {
  const [content, setContent] = useState<string>('')
  const [link, setLink] = useState<string>('about:blank')
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSubmit = useCallback((event): void => {
    event.preventDefault()

    const c: NewPost = {
      content: content,
      link: link,
    }

    fetch('/api/post', { method: 'POST', body: JSON.stringify(c), headers: {'Content-Type': 'application/json'} })
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

  }, [link, content])

  return (
    <div className={styles._}>
      <form onSubmit={handleSubmit}>
        <textarea name="content" value={content} onChange={e => setContent(e.target.value)} />
        <input type="hidden" name="link" value={link} />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}
