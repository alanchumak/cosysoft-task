import React from 'react'
import { ReadingList } from './ReadingList'
import { JokeList } from './JokeList'
import styles from './App.module.css'


export const App = () => {
    return(
        <div className={styles.app}>
            <JokeList/>
            <ReadingList/>
        </div>

    )
}
