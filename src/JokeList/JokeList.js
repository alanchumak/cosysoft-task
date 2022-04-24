import React, { useEffect } from 'react'
import styles from './Joke.module.css'
import { selectTenJokes, fetchJokes } from '../features/jokes/jokesSlice'
import { useSelector, useDispatch } from 'react-redux'


const Joke = ({joke}) => {
    return(
        <div className={styles.joke}>
            <div>
            <div>
                <span className={styles.setup}>Setup:</span> {joke.setup}
            </div>
            <div>
                <span className={styles.punchline}>Punchline:</span> {joke.punchline}
            </div>
            </div>
            <div 
            title='Добавить в мой список'
            className={styles.addBtn}>+</div>
        </div>
    )
}



export const JokeList = () => {
    const dispatch = useDispatch()
    const jokes = useSelector(selectTenJokes)
    const jokesStatus = useSelector(state => state.jokes.status)

    useEffect(() => {
        if (jokesStatus == 'idle')
            dispatch(fetchJokes())
    },
        [jokesStatus, dispatch])

    const onClicked =  () => {
        dispatch(fetchJokes())
    }    

    const content = jokes.map(item => <Joke key={item.id} joke={item} />)

    return(
        <div>
            <button onClick={onClicked}>Получить 10 новых шуток</button>
            {content}
            
        </div>
    )
}