import { useState } from 'react'
import BookmarkIcon from '../Icons/BookmarkIcon.js'
import BookmarkedIcon from '../Icons/BookmarkedIcon.js'
import styles from './styles.module.css'

const BookmarkButton = ({ className, onClick }) => {
  const [bookmark, setBookmark] = useState(false)

  const handleClick = event => {
    setBookmark(!bookmark)
    onClick()
  }

  return (
    <button className={`${styles.bookmark} ${className || ''}`} onClick={handleClick}>
      <div>{bookmark ? <BookmarkedIcon /> : <BookmarkIcon />}</div>
      <div className={styles.tooltip} role="tooltip">{bookmark ? 'Bookmarked' : 'Bookmark'}</div>
    </button>
  )
}

export default BookmarkButton
