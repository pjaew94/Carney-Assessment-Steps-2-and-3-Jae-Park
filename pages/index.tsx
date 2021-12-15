import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import { useState } from 'react'
import MemberCard from '../components/MemberCard'
import { IMemberWithSubscriptionDetails } from '../types'


export const getStaticProps: GetStaticProps = async(ctx) => {
  const membersResponse = await fetch('http://localhost:5000/members')
  const members = await membersResponse.json()

  return {
    props: { members }
  }
}

interface IHome {
  members: {error: boolean, data: IMemberWithSubscriptionDetails[]}
}

const Home: NextPage<IHome> = ({members}) => {

  const [membersList, setMembersList] = useState(members.data);


  const sorter = () => {
    const sorted = members.data.slice(0).sort(({subscription: a}, {subscription: b}) => b.price - a.price)
    setMembersList(sorted)
    console.log(membersList);
  }

  const averagePrices = () => {
    let total = 0;
    let length = membersList.length
    members.data.forEach(({subscription}) => total += subscription.price);
    return (total/length).toFixed(2)
  }
  
  return (
    <div className='flex flex-col w-screen min-h-screen items-center py-16 px-10'>
      <div className='-z-10 fixed w-screen h-screen top-0 left-0 bg-gradient-to-r from-primary to-secondary' />

      <h1 className='font-sans font-bold text-5xl text-white mb-16'>Carney Subscription</h1>

        <h2 className='font-sans text-3xl'>Average Subscription Price: ${averagePrices()}</h2>
    
      <button className='bg-white py-3 px-3 rounded-md my-10 shadow-md hover:scale-105' onClick={() => sorter()}>Sort by Subscription</button>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6 2xl:grid-cols-4'>
      {membersList.map((mem) => {
        return <MemberCard
          key={mem.id}
          info={mem}
        />
      })}
      </div>
      
    </div>
  )
}

export default Home
