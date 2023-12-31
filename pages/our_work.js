import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import All_projects from '@/comps/All_projects';
import Interior_finishing from '@/comps/Interior_finishing';
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import Contact_home from '@/comps/Contact_home';

const OurWork = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  const items = [
    {
      key: '1',
      label: t("all_project.PROJECTS"),
      children: <All_projects />,
    },
    {
      key: '2',
      label: t("all_project.INTERIOR_FINISHING"),
      children: <Interior_finishing />,
    },
  ];

  const [tabPosition, setTabPosition] = useState('left');
  const [tabPositionAr, setTabPositionAr] = useState('right');
  const [tabPositionTop, setTabPositionTop] = useState('top');

  const mediaQuery = window.matchMedia('(max-width: 1280px)');

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
    setTabPositionTop(e.target.value);
    setTabPositionAr(e.target.value);
  };


  return (
    <>
      <Head>
        <title>Our work - Sigma</title>
        <link rel="icon" href="logo3.png" />
      </Head>
      <div className={`mt-10 ${language == "ar" ? "ourWorkAr" : "ourWorkEn"}`}>
        <Tabs
          tabPosition={language == "ar" ?
            mediaQuery.matches ? tabPositionTop : tabPositionAr
            : mediaQuery.matches ? tabPositionTop : tabPosition
          }
          items={items}
          defaultActiveKey="1"
          className="custom-tab-bar"
        />
      </div>
      <Contact_home />
    </>
  )
}

export default OurWork
