
"use client";
import { ChampionsLol } from '@/interface/IchampionsLeagueOfLegends';
import Image from 'next/image';
import React from 'react'

interface Props {
    champions: ChampionsLol
}

export const Cards = ({ champions }: Props) => {

    const array = Object.values(champions.data)

    console.log(array)

    return (
        <div
            className='flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-5'
        >
            <Image
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions.data.Aatrox.id}_0.jpg`}
                alt="Picture of the author"
                width={500}
                height={500}
            />

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-gray-800'>{champions.data.Aatrox.name}</h1>
                <h2 className='text-xl text-gray-600'>{champions.data.Aatrox.title}</h2>
                <div
                    className='flex flex-row justify-center items-center'
                >
                    {
                        champions.data.Aatrox.tags.map((tag, index) => (
                            <span
                                key={index}
                                className='text-sm text-white mr-5 ml-5 mt-2 mb-2 rounded-xl bg-gray-800 shadow-lg p-5'
                            >
                                {tag}
                            </span>
                        ))
                    }
                </div>

            </div>




        </div>
    )
}
