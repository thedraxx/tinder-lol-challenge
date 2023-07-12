'use client';
import React, { useContext } from 'react'
import { ChampionsSaveContext } from '../context/ChampionsSaveContext';

interface Props {
    title: 'No more cards' | '¡Ya have selected 5 champions!';
}

const Alert = ({ title }: Props) => {
    const { listSaveChampions } = useContext(ChampionsSaveContext);

    return (
        <div className="bg-yellow-200 text-yellow-800 p-10 rounded-md shadow-md">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </div>

                {
                    title === 'No more cards'
                        ? <div className="ml-3">
                            <p className="text-sm font-medium">No more cards</p>
                            <p className="mt-1 text-sm">You have seen all the cards</p>
                            <div className="mt-4">
                                <button
                                    className="mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-500"
                                    onClick={() => window.location.reload()}
                                >
                                    Reset Game
                                </button>
                            </div>
                        </div>
                        : <div className="ml-3">
                            <p className="text-sm font-medium">¡Ya have selected 5 champions!</p>
                            <p className="mt-1 text-sm">Your Teanmate is...</p>
                            <div className="mt-2 text-sm">

                                <ul className="list-disc pl-5 space-y-1">
                                    {listSaveChampions.map((champion) => (
                                        <li key={champion.id}>
                                            {champion.name}
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