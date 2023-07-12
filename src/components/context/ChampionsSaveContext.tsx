import { Datum } from '@/interface/IchampionsLeagueOfLegends';
import { createContext } from 'react';

export interface ChampionsSaveContextProps {
    listSaveChampions: Datum[] | [];
    noMoreCards: boolean;

    // Methods
    addChampion: (champion: Datum) => void;
    handleNoMoreCards: () => void;
}


export const ChampionsSaveContext = createContext({} as ChampionsSaveContextProps);