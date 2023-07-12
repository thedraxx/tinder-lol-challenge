"use client";
import { useReducer } from 'react';
import { Datum } from '@/interface/IchampionsLeagueOfLegends';
import { ChampionsSaveReducer } from './championsSaveReducer';
import { ChampionsSaveContext } from './ChampionsSaveContext';

export interface ChampionsSaveState {
    listSaveChampions: Datum[] | [];
    noMoreCards: boolean;
}

const ChampionsSave_INITIAL_STATE: ChampionsSaveState = {
    listSaveChampions: [],
    noMoreCards: false,
};

interface Props {
    children: React.ReactNode;
}

export const ChampionsSaveProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(ChampionsSaveReducer, ChampionsSave_INITIAL_STATE);


    const addChampion = (champion: Datum) => {
        dispatch({
            type: '[ChampionsSave] - addChampion',
            payload: champion
        });
    };

    const handleNoMoreCards = () => {
        dispatch({
            type: '[ChampionsSave] - noMoreCards',
        });
    };

    return (
        <ChampionsSaveContext.Provider value={{
            ...state,
            addChampion,
            handleNoMoreCards
        }}>
            {children}
        </ChampionsSaveContext.Provider>
    )
}