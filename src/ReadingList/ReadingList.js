import React from 'react'
import styles from './ReadingList.module.css'
import { selectReadingList } from '../features/jokes/jokesSlice'
import { useSelector } from 'react-redux'
import { ListItem } from './ListItem'


export const ReadingList = () => {
    const jokes = useSelector(selectReadingList)
    // const content = Object.keys(jokes).map(id => <ListItem key={id} joke={jokes[id]} />)
    const content = jokes.map(item => <ListItem key={item.id} joke={item} />)

    return(
        <div className={styles.readingList}>
            <div className={styles.header}>Список для чтения</div>
            {content}
        </div>
    )
}