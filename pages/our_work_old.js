import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import Supervision from '@/comps/Supervision';
import Construction from '@/comps/Construction';
import Planing from '@/comps/Planing';

const OurWork = () => {

  const items = [
    {
      key: '1',
      label: 'SUPERVISION',
      children: <Supervision />,
    },
    {
      key: '2',
      label: 'CONSTRUCTION',
      children: <Construction />,
    },
    {
      key: '3',
      label: 'PLANING',
      children: <Planing />,
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
