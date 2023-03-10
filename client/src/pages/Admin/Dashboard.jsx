import React from 'react'
import { Column } from '@ant-design/plots';
import Layout from '../../components/Layout';
const DashBoard = () => {
  const data = [
    {
      type: 'Jan',
      value: 0.16,
    },
    {
      type: 'Feb',
      value: 0.125,
    },
    {
      type: 'Mar',
      value: 0.24,
    },
    {
      type: 'Apr',
      value: 0.19,
    },
    {
      type: 'May',
      value: 0.22,
    },
    {
      type: 'Jun',
      value: 0.05,
    },
    {
      type: 'Jul',
      value: 0.01,
    },
    {
      type: 'Aug',
      value: 0.015,
    },
    {
      type: 'Sept',
      value: 0.015,
    },
    {
      type: 'Oct',
      value: 0.15,
    },
    {
      type: 'Nov',
      value: 0.015,
    },
    {
      type: 'Dec',
      value: 0.015,
    },
  ];
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <Layout>
    <div className='main-div-dashboard'>
      <h2 className="">DashBoard</h2>
       <div className="parent ">
       <div className='child  ' >
            <span className='span-text'>Total Sales</span> 
       </div>
        <div className='child ' >
            <span className='span-text' >Average Orders</span> 
       </div>
        <div className='child ' >
            <span className='span-text'>Total Orders </span> 
       </div>
       </div>
    </div>


    <div className="mt-4">
        <h3 className="mb-4">
          Stats
        </h3>
        <div>
        <Column {...config} />
        </div>
    </div>
    </Layout>
  )
}

export default DashBoard