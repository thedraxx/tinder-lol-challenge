"use client";
import React, { useContext } from 'react'
import { Cards } from '../cards/Cards'
import { ChampionsLol } from '@/interface/IchampionsLeagueOfLegends';
import { ChampionsSaveContext } from '../context/ChampionsSaveContext';
import Alert from '../alert/Alert';

interface Props {
    getChampions: ChampionsLol;
}

const HomeScreenPage = ({ getChampions }: Props) => {

    const { listSaveChampions, noMoreCards } = useContext(ChampionsSaveContext);

    return (
        <>
            {
                listSaveChampions.length === 5
                    ? <div className='absolute inset-0 flex justify-center items-center z-30 '>
                        <Alert
                            title='¡Ya have selected 5 champions!'
                        />
                    </div>
                    : noMoreCards && <div className='absolute inset-0 flex justify-center items-center z-30 '>
                        <Alert
                            title='No more cards'
                        />
                    </div>
            }

            <Cards
                champions={getChampions}
            />
        </>
    )
}

export default HomeScreenPage