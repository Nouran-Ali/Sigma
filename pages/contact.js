import { Contact_form } from '@/comps/Contact_form'
import { Contact_info } from '@/comps/Contact_info'
import { Map } from '@/comps/Map'
import React from 'react'

const Contact = () => {
  return (
    <div className='grid grid-cols-2 gap-12 mt-7'>
      <div className='animation_contact_left'>
        <Contact_form />
      </div>
      <div className='animation_contact_right'>
        <Contact_info />
      </div>
    </div>
  )
}

export default Contact
