/*
import { GameList } from '../GameComponents/GameList'
import axios from 'axios'
import { baseUrl } from '../constants/url'
import { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Features } from '../Features/Features'
import { Footer } from '../Footer/Footer'
import { MainSection } from '../MainSection/MainSection'
*/

import React, { useContext, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../Navbar/Navbar';
import { Features } from '../Features/Features';
import { Footer } from '../Footer/Footer';
import { MainSection } from '../MainSection/MainSection';
import { EditableCard } from '../GameComponents/EditableCard';
import { InformationCard } from '../GameComponents/InformationCard';
import { baseUrl } from '../constants/url'

import axios from 'axios';
import { GameList } from '../GameComponents/GameList';

export const WelcomeScreen = () => {
    const { user } = useAuth();
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

    // Picks what appropiate game component depending on the auth state
    // const GameCard = user ? EditableCard : InformationCard;

    return (
        <>
            <Navbar />
            <MainSection searchValue={searchValue} onSearchValueChange={onSearchValueChange} onSearch={onSearch} onClear={onClear} />
            <GameList games={games} isEditable={user ? true : false}/> {/* Usa el componente de juego correspondiente */}
            <Features />
            <Footer />
        </>
    );
}