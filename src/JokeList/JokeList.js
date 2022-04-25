import React, { useEffect } from 'react'
import styles from './Joke.module.css'
import { selectTenJokes, fetchJokes, jokeSavedToReadingList } from '../features/jokes/jokesSlice'
import { useSelector, useDispatch } from 'react-redux'


const SaveButton = ({jokeId}) =>{
    const dispatch = useDispatch()
    return (
        <div
            className={styles.addBtn}
            title='Добавить в мой список'
            onClick={() => dispatch(jokeSavedToReadingList({ id: jokeId})) }
        >
            +
        </div>
    )
}


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
            <SaveButton jokeId={joke.id}/>
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

    // const content = jokes.map(item => <Joke key={item.id} joke={item} />)
    const content = Object.keys(jokes).map(id => <Joke key={id} joke={jokes[id]} />)

    return(
        <div>
            <button onClick={onClicked}>Получить 10 новых шуток</button>
            {content}
            
        </div>
    )
}