"use client";
import { ChampionsLol } from '@/interface/IchampionsLeagueOfLegends';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, useDragControls } from "framer-motion";

interface Props {
    champions: ChampionsLol;
}

export const Cards = ({ champions }: Props) => {
    const [championsToShow, setChampionsToShow] = useState([]);
    const [listSaveChampions, setListSaveChampions] = useState([]);
    const controls = useDragControls();

    useEffect(() => {
        if (champions.data) {
            const array = Object.values(champions.data);
            setChampionsToShow(array);
        }
    }, []);

    const handleDragEnd = (event, { offset, velocity }) => {

        if (offset.x > 0) {
            // Arrastre hacia la derecha
            setChampionsToShow((prevChampions) => {
                const newChampions = [...prevChampions];
                const firstChampion = newChampions.shift();
                newChampions.push(firstChampion);
                return newChampions;
            });
        } else if (offset.x < 0) {
            // Arrastre hacia la izquierda
            // Puedes agregar lógica adicional aquí si deseas manejar el arrastre hacia la izquierda
        }
    };

    return (
        <div className='flex flex-row justify-center items-center'>
            {championsToShow.map((champion, index) => (
                <motion.div
                    initial={{ x: 0, y: 0, scale: 1 }}
                    key={index}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    className='flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-5 absolute'
                    dragControls={controls}
                    onDragEnd={(event, info) => handleDragEnd(event, info)}
                    style={{ zIndex: championsToShow.length - index }}
                >
                    <Image
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />

                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-2xl font-bold text-gray-800'>{champion.name}</h1>
                        <h2 className='text-xl text-gray-600'>{champion.title}</h2>
                        <div className='flex flex-row justify-center items-center'>
                            {champion.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className='text-sm text-white mr-5 ml-5 mt-2 mb-2 rounded-xl bg-gray-800 shadow-lg p-5'
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
