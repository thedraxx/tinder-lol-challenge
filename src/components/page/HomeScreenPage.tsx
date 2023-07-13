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

    console.log(listSaveChampions)

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

            <div
                className='text-white text-4xl font-bold text-center absolute z-30 items-center align-center left-0 right-0 top-10'
            >
                <h1 className='text-white text-4xl font-bold text-center mb-5'>
                    Create your team
                </h1>

                <h2
                    className='text-white text-2xl font-bold text-center mb-5'
                >
                    {
                        `${'<---' + ' ' + 'Drag left to discard'}`
                    }
                </h2>
                <h2
                    className='text-white text-2xl font-bold text-center'
                >
                    {
                        `${'Drag right to discard' + ' ' + '--->'}`
                    }
                </h2>
            </div>

            <Cards
                champions={getChampions}
            />
        </>
    )
}

export default HomeScreenPage