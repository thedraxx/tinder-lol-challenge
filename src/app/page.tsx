import { Cards } from '@/components/cards/Cards'
import { ChampionsLol } from '@/interface/IchampionsLeagueOfLegends'
import React from 'react'

const getfetchData = async () => {
  const res = await fetch('http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json')
  const data = await res.json()
  return data
}

const home = async () => {

  const getChampions: ChampionsLol = await getfetchData()

  return (
    <div className='justify-center items-center  '>
      <Cards
        champions={getChampions}
      />
    </div>
  )
}

export default home