/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './KnockoutStage.module.css'

function KnockoutStage({ fase }) {

    const [ jogos, setJogos ] = useState([])
    const url = `https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/${fase}-copa-2023.json`

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setJogos(data)
        }
        buscarJogos()
    }, [url])

    return (
        <section className={styles.jogos}>
            {
                jogos.map( jogo => (
                    <div key={jogo.jogo} className={styles.jogo}>
                        <h2 className={styles.titulo2}>
                            { jogo.fase } {jogo.jogo} - chave {jogo.chave}
                        </h2>
                        <h3>
                            <span className={styles.dia}>{jogo.dia}</span>
                            <span className={styles.data}>{jogo.data}</span>
                            <span className={styles.hora}>{jogo.hora}</span>
                        </h3>
                        <h3 className={styles.placar}>
                            <div className={styles.mandante_box}>
                                {jogo.mandante}
                                <img src={`/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`} alt={jogo.mandante} />
                            </div>
                            <div className={styles.placar_box}>
                                <span className={styles.gols}>{jogo.gols_mandante}</span>
                                x
                                <span className={styles.gols}>{jogo.gols_visitante}</span>
                            </div>
                            <div className={styles.visitante_box}>
                                <img src={`/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`} alt={jogo.visitante} />
                                {jogo.visitante}
                            </div>
                        </h3>
                        <div className={styles.tempo_extra}>
                            {
                                jogo.prorrogacao === "Sim" &&
                                <div className={styles.centralizar}>
                                    <span>Prorrogação? {jogo.prorrogacao} | Placar Prorrogação: {jogo.placar_prorrogacao}</span>
                                    <span>Pênaltis? {jogo.penaltis} | Placar Pênaltis: {jogo.placar_penaltis}</span>
                                </div>
                            }
                        </div>                        
                        <h4>Vencedor: {jogo.vencedor}</h4>
                    </div>
                ))
            }
        </section>
    )
}

export default KnockoutStage
