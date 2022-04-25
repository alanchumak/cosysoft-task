import React from 'react'
import styles from './Joke.module.css'
import { jokeSavedToReadingList } from '../features/jokes/jokesSlice'
import { useDispatch } from 'react-redux'

const SaveButton = ({ jokeId }) => {
    const dispatch = useDispatch()
    return (
        <div
            className={styles.addBtn}
            title='Добавить в мой список'
            onClick={() => dispatch(jokeSavedToReadingList({ id: jokeId }))}
        >
            +
        </div>
    )
}


export const Joke = ({ joke }) => {
    return (
        <div className={styles.joke}>
            <div className={styles.text}>
                <div>
                    <span className={styles.setup}>Setup:</span> {joke.setup}
                </div>
                <div>
                    <span className={styles.punchline}>Punchline:</span> {joke.punchline}
                </div>
            </div>
            <SaveButton jokeId={joke.id} />
        </div>
    )
}