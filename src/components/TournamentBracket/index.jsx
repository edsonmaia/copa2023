/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './TournamentBracket.module.css'
import HeaderComponent from '../HeaderComponent'
import DateTimeComponent from '../DateTimeComponent'
import ScoreComponent from '../ScoreComponent'
import ExtraInfoComponent from '../ExtraInfoComponent'
import WinnerComponent from '../WinnerComponent'

function TournamentBracket({ fase }) {

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
                    <div key={jogo.id} className={styles.jogo}>
                        <HeaderComponent jogo={jogo} />
                        <DateTimeComponent jogo={jogo} />
                        <ScoreComponent jogo={jogo} />
                        <ExtraInfoComponent jogo={jogo} />
                        <WinnerComponent jogo={jogo} />
                    </div>
                ))
            }
        </section>
    )
}

export default TournamentBracket
