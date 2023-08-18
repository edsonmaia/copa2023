/* eslint-disable react/prop-types */
import styles from './DateTimeComponent.module.css'

function DateTimeComponent({ jogo }) {
    return (
        <h3>
            <span className={styles.dia}>{jogo.dia}</span>
            <span className={styles.data}>{jogo.data}</span>
            <span className={styles.hora}>{jogo.hora}</span>
        </h3>
    )
}

export default DateTimeComponent
