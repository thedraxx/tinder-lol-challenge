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

            <div
                className='text-white text-center absolute z-30 items-center align-center left-0 right-0 top-20'
            >
                <h1 className='text-white text-md font-bold text-center mb-5 sm:text-xl md:text-xl'>
                    Create your team
                </h1>

                <div
                    className='flex flex-row justify-center items-center md:flex-col lg:flex-row xl:flex-col'
                >
                    <h2
                        className='text-white text-md font-bold text-center  sm:text-xl md:text-xl'
                    >
                        {
                            `${'<---' + ' ' + 'Drag left to discard'}`
                        }
                    </h2>
                    <h2
                        className='text-white text-md font-bold text-center ml-5 sm:text-xl md:text-xl'
                    >
                        {
                            `${'Drag right to add' + ' ' + '--->'}`
                        }
                    </h2>
                </div>


            </div>

            <Cards
                champions={getChampions}
            />
        </>
    )
}

export default HomeScreenPage