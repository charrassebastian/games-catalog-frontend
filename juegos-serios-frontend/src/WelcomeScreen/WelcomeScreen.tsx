import { GameList } from '../GameComponents/GameList'
import axios from 'axios'
import { baseUrl } from '../constants/url'
import { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Features } from '../Features/Features'
import { Footer } from '../Footer/Footer'
import { MainSection } from '../MainSection/MainSection'

export const WelcomeScreen = () => {
    const getGames = (value: any) => axios.get(baseUrl + 'games', { params: { value }}).then(res => res.data);
    const [games, setGames] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const onSearchValueChange = (value: any) => {
        setSearchValue(value)
    }

    const onSearch = async () => {
        const tempGames = await getGames(searchValue)
        setGames(tempGames.games)
    }

    const onClear = () => {
        setSearchValue("")
        setGames([])
    }

    // TODO: set based on the availability of the jwt
    const isEditable = true

    // If data.games contains games, display them using GameList
    return (
        <>
            <Navbar />
            <MainSection searchValue={searchValue} onSearchValueChange={onSearchValueChange} onSearch={onSearch} onClear={onClear} />
            <GameList games={games} isEditable={isEditable} />
            <Features />
            <Footer />
        </>
    )
}