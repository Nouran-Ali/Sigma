import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import All_projects from '@/comps/All_projects';
import Interior_finishing from '@/comps/Interior_finishing';

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
      children: <Interior_finishing />,
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
