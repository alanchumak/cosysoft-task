import React, { useEffect, useRef, useState, useCallback } from 'react'
import styles from './ReadingList.module.css'
import { selectReadingList, fetchJokes, jokeRemovedFromReadingList } from '../features/jokes/jokesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { BookmarkIcon } from './BookmarkIcon'


const DeleteButton = ({ jokeId }) => {
    const dispatch = useDispatch()
    return (
        <div
            className={styles.deleteBtn}
            title='Удалить из списока'
            onClick={() => dispatch(jokeRemovedFromReadingList({ id: jokeId }))}
        >
            ×
        </div>
    )
}


const ListItem = ({joke}) => {
    let content = `Setup: ${joke.setup} Punchline: ${joke.punchline}`
    
    return (
        <div className={styles.listItem}>
                <BookmarkIcon />
            <div className={styles.text}>
                    {content}
                    <div className={styles.timeAgo}>Добавлено: 5 мин назад</div>
                </div>
            <DeleteButton jokeId={joke.id}/>
        </div>
    )
}

export const ReadingList = () => {
    const dispatch = useDispatch()
    const jokes = useSelector(selectReadingList)
    const jokesStatus = useSelector(state => state.jokes.status)

    useEffect(() => {
        if (jokesStatus == 'idle')
            dispatch(fetchJokes())
    },
        [jokesStatus, dispatch])

    // const content = jokes.map(item => <ListItem key={item.id} joke={item} />)
    const content = Object.keys(jokes).map(id => <ListItem key={id} joke={jokes[id]} />)


    return(
        <div className={styles.readingList}>
            {content}
        </div>
    )
}