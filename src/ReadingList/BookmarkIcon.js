import React from 'react'
import styles from './ReadingList.module.css'


// width = "512" height = "512"
export const BookmarkIcon = () => {
    return(
        <div className={styles.bookmarkIcon}>
            <svg class="svg" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.177 1.981c.286-.748 1.344-.75 1.633-.002l1.408 3.646h3.728c.854 0 1.202 1.096.506 1.589l-3.16 2.236 1.222 3.732c.264.807-.661 1.48-1.347.979l-3.175-2.317-3.174 2.317c-.686.5-1.612-.172-1.348-.98L4.692 9.45 1.544 7.213c-.695-.494-.346-1.588.506-1.588h3.731L7.177 1.98zm.817.662l-1.31 3.42c-.13.338-.454.562-.817.562H2.442l2.904 2.063c.313.222.444.621.325.985l-1.13 3.451 2.935-2.142c.308-.224.725-.224 1.032 0l2.935 2.143-1.13-3.451c-.119-.365.013-.765.327-.987l2.913-2.062h-3.42c-.362 0-.687-.223-.817-.56L7.994 2.643z" fill-rule="evenodd" fill-opacity=".8" fill="#000" stroke="none"></path></svg>
        </div>
    )
}
