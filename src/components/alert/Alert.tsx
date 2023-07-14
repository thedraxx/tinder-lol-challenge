'use client';
import React, { useContext } from 'react'
import { ChampionsSaveContext } from '../context/ChampionsSaveContext';
import Image from 'next/image';

interface Props {
    title: 'No more cards' | '¡Ya have selected 5 champions!';
}

const Alert = ({ title }: Props) => {
    const { listSaveChampions } = useContext(ChampionsSaveContext);

    return (
        <div className="bg-slate-100 text-yellow-800 p-10 rounded-md shadow-md w-96 sm:w-auto sm:top-24">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </div>
                {
                    title === 'No more cards'
                        ? <div className="ml-3">
                            <p className="text-sm font-medium">Oh oh! No more cards!</p>
                            <p className="mt-1 text-sm">You need to select 5 champions</p>
                            <div className="mt-4">
                                <button
                                    className="mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-500"
                                    onClick={() => window.location.reload()}
                                >
                                    Reset Game
                                </button>
                            </div>
                        </div>
                        : <div className="ml-3  items-center justify-center flex  flex-col">
                            <p className="text-sm font-medium">¡Ya have selected 5 champions!</p>
                            <p className="mt-1 text-sm">Your Teanmate is...</p>
                            <div className="mt-2 text-sm">

                                <ul
                                    className="grid grid-cols-2 gap-3 justify-center items-center align-middle sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5"
                                >
                                    {listSaveChampions.map((champion) => (
                                        <li
                                            key={champion.id}
                                            className="flex flex-col justify-center items-center"
                                        >
                                            <Image
                                                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                                                alt="Picture of the author"
                                                width={300}
                                                height={200}
                                                className='rounded-md shadow-full shadow-2xl  hover:scale-75  transition duration-500 ease-in-out'
                                            />
                                            <h2
                                                className="text-gray-600 mt-2 sm:text-sm md:text-md lg:text-lg xl:text-xl "
                                            >
                                                {champion.title}
                                            </h2>
                                            <h3
                                                className="text-xl text-gray-600 sm:text-sm md:text-md lg:text-lg xl:text-xl"
                                            >
                                                {champion.name}
                                            </h3>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-500"
                                    onClick={() => window.location.reload()}
                                >
                                    Reset Game
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div>

    )
}

export default Alert