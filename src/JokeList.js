import React, { useEffect, useState } from 'react'
import styles from './Joke.module.css'


export const Joke = ({joke}) => {
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
            <div className={styles.addBtn}>+</div>
        </div>
    )
}



export const JokeList = () => {
    const [jokes, setJokes] = useState([]);

    async function fetchData() {
        const url = 'https://karljoke.herokuapp.com/jokes/ten'
        const response = await fetch(url)
        const jokes = await response.json()
        setJokes(jokes)
        // console.log(jokes)
    }

    useEffect(() => {
        
        fetchData()
        }, [])

    const content = jokes.map(item => <Joke key={item.id} joke={item}/>)    

    return(
        <div>
            <button onClick={() => fetchData()}>Получить 10 новых шуток</button>
            {content}
            
        </div>
    )
}