import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import Supervision from '@/comps/Supervision';
import Construction from '@/comps/Construction';

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
      children: <Supervision />,
    },
  ];

  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    <div className='mt-10'>
      <Tabs
        tabPosition={tabPosition}
        items={items}
        defaultActiveKey="1"
      // items={new Array(3).fill(null).map((_, i) => {
      //   const id = String(i + 1);
      //   return {
      //     label: `Tab ${id}`,
      //     key: id,
      //     children: `Content of Tab ${id}`,
      //   };
      // })}
      />
    </div>
  )
}

export default OurWork
