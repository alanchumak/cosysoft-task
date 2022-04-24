import React, { useEffect } from 'react'
import styles from './ReadingList.module.css'
import { selectTenJokes, fetchJokes } from '../features/jokes/jokesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { BookmarkIcon } from './BookmarkIcon'


const ListItem = ({joke}) => {
    let content = `Setup: ${joke.setup} Punchline: ${joke.punchline}`
    content = `${content.substring(0, 40)}...`
    return (
        <div className={styles.listItem}>
            {content}
            <div className={styles.timeAgo}>Добавлено: 5 мин назад</div>
            {/* <div><BookmarkIcon/></div> */}
            <div><BookmarkIcon/></div>
        </div>
    )
}

export const ReadingList = () => {
    const dispatch = useDispatch()
    const jokes = useSelector(selectTenJokes)
    const jokesStatus = useSelector(state => state.jokes.status)

    useEffect(() => {
        if (jokesStatus == 'idle')
            dispatch(fetchJokes())
    },
        [jokesStatus, dispatch])

    const content = jokes.map(item => <ListItem key={item.id} joke={item} />)

    return(
        <div className={styles.readingList}>
            {content}
        </div>
    )
}