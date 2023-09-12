import { Contact_form } from '@/comps/Contact_form'
import { Contact_info } from '@/comps/Contact_info'
import { Map } from '@/comps/Map'
import React from 'react'
import Head from 'next/head';
import { useTranslation } from "react-i18next";

const Contact = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <>
      <Head>
        <title>Contact - Sigma</title>
        <link rel="icon" href="logo3.png" />
      </Head>
      <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-12 mt-7 max-xl:flex max-xl:flex-wrap-reverse' dir={language == "ar" ? "rtl" : "ltr"}>
        <div className='animation_contact_left'>
          <Contact_form />
        </div>
        <div className='animation_contact_right max-xl:mb-10'>
          <Contact_info />
        </div>
      </div>
    </>
  )
}

export default Contact
