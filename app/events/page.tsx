import Past from '@/components/Past'
import Speaker from '@/components/Speaker'
import Upcoming from '@/components/Upcoming'
import React from 'react'

function events() {
  return (
    <div className='md:space-y-20 space-y-12 max-w-screen-2xl mx-auto font-inter'>
        <Upcoming />

        <Past />

        <Speaker />

    </div>
  )
}

export default events