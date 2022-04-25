import React, { useState } from 'react'
import styles from './ReadingList.module.css'
import { jokeRemovedFromReadingList } from '../features/jokes/jokesSlice'
import {  useDispatch } from 'react-redux'
import { BookmarkIcon } from './BookmarkIcon'
import jokeStyles from '../JokeList/Joke.module.css'


import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

const JokeModalForm = ({joke, open=false, onClose}) => {
    return(
        <Rodal 
            visible={open} 
            onClose={onClose}
            width={550}
            // height={200}
            customStyles={{ height: 'auto', bottom: 'auto', top: '20%', borderRadius: '5px' }}
        >

            <div className={styles.jokeModalFormContent} >
                <div className={jokeStyles.text}>
                    <div>
                        <span className={jokeStyles.setup}>Setup:</span> {joke.setup}
                    </div>
                    <div>
                        <span className={jokeStyles.punchline}>Punchline:</span> {joke.punchline}
                    </div>
                </div>
            </div>
        </Rodal>
    )
}


export const ListItem = ({ joke }) => {
    let content = `Setup: ${joke.setup} Punchline: ${joke.punchline}`
    const [showJoke, setShowJoke] = useState(false)
    const closeModalJoke = () => setShowJoke(false)

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
            <JokeModalForm joke={joke} open={showJoke} onClose={() => setShowJoke(false)}/>
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