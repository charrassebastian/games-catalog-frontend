import { useState } from 'react';
import { AuthenticationComponent } from '../AuthenticationComponent/AuthenticationComponent';
import { Features } from '../Features/Features';
import { Footer } from '../Footer/Footer';
import { MainSection } from '../MainSection/MainSection';
import { baseUrl } from '../constants/url';
import { Attributions } from '../Attributions/Attributions';

import axios from 'axios';
import { GameList } from '../GameComponents/GameList';

export const MainScreen = () => {
    const getGames = () => axios.get(baseUrl + 'games', { 
        params: { 
            value: searchValue, 
            onlyValidatedContent, 
            area, 
            purpose, 
            market, 
            public: gamePublic 
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(res => res.data);
    const [games, setGames] = useState([])

    const [searchValue, setSearchValue] = useState("")
    const [onlyValidatedContent, setOnlyValidatedContent] = useState(false)
    const [area, setArea] = useState("")
    const [purpose, setPurpose] = useState("")
    const [market, setMarket] = useState("")
    const [gamePublic, setGamePublic] = useState("")

    const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const onOnlyValidatedContentChange = () => {
        setOnlyValidatedContent(!onlyValidatedContent)
    }

    const onAreaChange = (area: string) => {
        setArea(area)
    }

    const onPurposeChange = (purpose: string) => {
        setPurpose(purpose)
    }

    const onMarketChange = (market: string) => {
        setMarket(market)
    }

    const onGamePublicChange = (gamePublic: string) => {
        setGamePublic(gamePublic)
    }

    const onSearch = async () => {
        const tempGames = await getGames()
        setGames(tempGames.games)
        const searchResults = document.getElementById('search-results')
        if (searchResults) {
            window.scrollTo({
                top: searchResults.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const onClear = () => {
        setGames([])
        setSearchValue("")
        setOnlyValidatedContent(false)
        setArea("")
        setPurpose("")
        setMarket("")
        setGamePublic("")
    }

    return (
        <>
            <AuthenticationComponent/>
            <MainSection onSearch={onSearch} onClear={onClear} searchValue={searchValue} onSearchValueChange={onSearchValueChange} onlyValidatedContent={onlyValidatedContent} onOnlyValidatedContentChange={onOnlyValidatedContentChange} area={area} onAreaChange={onAreaChange} purpose={purpose} onPurposeChange={onPurposeChange} market={market} onMarketChange={onMarketChange} gamePublic={gamePublic} onGamePublicChange={onGamePublicChange} />
            <GameList games={games} isEditable={!!localStorage.getItem("token")}/>
            <Features />
            <Attributions />
            <Footer />
        </>
    );
}