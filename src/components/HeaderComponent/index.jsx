/* eslint-disable react/prop-types */
import styles from './HeaderComponent.module.css'

function HeaderComponent({ jogo }) {
    return (
        <h2 className={styles.titulo2}>
            { jogo.fase } {jogo.jogo} - chave {jogo.chave}
        </h2>
    )
}

export default HeaderComponent
