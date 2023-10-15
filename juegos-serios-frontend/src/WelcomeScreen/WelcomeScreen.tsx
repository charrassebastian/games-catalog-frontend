import { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../Navbar/Navbar';
import { Features } from '../Features/Features';
import { Footer } from '../Footer/Footer';
import { MainSection } from '../MainSection/MainSection';
import { baseUrl } from '../constants/url'

import axios from 'axios';
import { GameList } from '../GameComponents/GameList';

export const WelcomeScreen = () => {
    // const { user } = useAuth();
    const getGames = () => axios.get(baseUrl + 'games', { params: { value: searchValue, onlyValidatedContent, area, purpose, market, public: gamePublic }}).then(res => res.data);
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
            <Navbar />
            <MainSection onSearch={onSearch} onClear={onClear} searchValue={searchValue} onSearchValueChange={onSearchValueChange} onlyValidatedContent={onlyValidatedContent} onOnlyValidatedContentChange={onOnlyValidatedContentChange} area={area} onAreaChange={onAreaChange} purpose={purpose} onPurposeChange={onPurposeChange} market={market} onMarketChange={onMarketChange} gamePublic={gamePublic} onGamePublicChange={onGamePublicChange} />
            {/* <GameList games={games} isEditable={user ? true : false}/> Picks the appropriate game component */}
            <GameList games={games} isEditable={true}/> {/* Picks the appropriate game component */}
            <Features />
            <Footer />
        </>
    );
}