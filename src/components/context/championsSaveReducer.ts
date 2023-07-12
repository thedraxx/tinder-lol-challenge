import { Datum } from '@/interface/IchampionsLeagueOfLegends';
import { ChampionsSaveState } from './ChampionsSaveProvider';


type ChampionsSaveActionType = 
  | {type: '[ChampionsSave] - addChampion', payload: Datum}
  | {type:'[ChampionsSave] - noMoreCards'}

export const ChampionsSaveReducer = (state:ChampionsSaveState, action:ChampionsSaveActionType): ChampionsSaveState => {
    switch (action.type) {
        case '[ChampionsSave] - addChampion':

           return {
                ...state,
                listSaveChampions: [...state.listSaveChampions, action.payload]
            }

        case '[ChampionsSave] - noMoreCards':
            return {
                ...state,
                noMoreCards: true
            }

        default:
            return state;
    }
}