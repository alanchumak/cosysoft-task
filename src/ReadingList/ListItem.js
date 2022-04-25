import React, { useState } from 'react'
import styles from './ReadingList.module.css'
import { jokeRemovedFromReadingList } from '../features/jokes/jokesSlice'
import {  useDispatch } from 'react-redux'
import { BookmarkIcon } from './BookmarkIcon'
import { Joke } from '../JokeList/Joke'

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';


export const ListItem = ({ joke }) => {
    let content = `Setup: ${joke.setup} Punchline: ${joke.punchline}`
    const [showJoke, setShowJoke] = useState(false)

    return (
        <div>
            <div
                className={styles.listItem}
                onClick={() => setShowJoke(true)}
            >
                <BookmarkIcon />
                <div className={styles.text}>
                    {content}
                    <div className={styles.timeAgo}>Добавлено 5 мин назад</div>
                </div>
                <DeleteButton jokeId={joke.id} />
            </div>
            <Rodal visible={showJoke} onClose={() => setShowJoke(false)}>
                <div>Content</div>
            </Rodal>
        </div >
    )
}


const DeleteButton = ({ jokeId }) => {
    const dispatch = useDispatch()
    return (
        <div
            className={styles.deleteBtn}
            title='Удалить из списка'
            onClick={() => dispatch(jokeRemovedFromReadingList({ id: jokeId }))}
        >
            ×
        </div>
    )
}