import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import Supervision from '@/comps/Supervision';
import Construction from '@/comps/Construction';
import Planing from '@/comps/Planing';
import All_projects from '@/comps/All_projects';

const OurWork = () => {

  const items = [
    {
      key: '1',
      label: 'PROJECTS',
      children: <All_projects />,
    },
    {
      key: '2',
      label: 'INTERIOR FINISHING',
      children: <Construction />,
    },
  ];

  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    <div className='mt-10 flex'>
      <Tabs
        tabPosition={tabPosition}
        items={items}
        defaultActiveKey="1"
        className="custom-tab-bar"
      />
    </div>
  )
}

export default OurWork
