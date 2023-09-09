import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import { Breadcrumb } from 'antd';
import {
  ArrowRightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
import styles from "../styles/project.module.css";
import Link from 'next/link';

const Wedding_hall = () => {
  return (
    <div>
      <Breadcrumb
        className='mt-7 mb-5 text-sm'
        items={[
          {
            href: '/our_work',
            title: (<span>Our work</span>),
          },
          {
            title: 'Wedding hall project',
          },
        ]}
      />
      <div className='mb-7'>
        <Image
          width={"100%"}
          height={"100%"}
          src={"/wedding_hall/8.jpeg"}
          className='rounded-lg max-xl:w-full'
          preview={{
            toolbarRender: (
              _,
              {
                transform: { scale },
                actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
              },
            ) => (
              <Space size={12} className="toolbar-wrapper">
                <SwapOutlined rotate={90} onClick={onFlipY} />
                <SwapOutlined onClick={onFlipX} />
                <RotateLeftOutlined onClick={onRotateLeft} />
                <RotateRightOutlined onClick={onRotateRight} />
                <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              </Space>
            ),
          }}
        />
      </div>

      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>
        <div>
          <h1 className='text-2xl'>Wedding hall - Palace Prince</h1>
          <p className='mt-3 text-[#677289]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

        </div>
        <div>
          <div className='p-5 shadow-2xl shadow-gray-400 rounded-lg'>
            <h2 className='text-2xl'>Projects Info</h2>
            <p className='mt-3 text-[#677289]'>Etiam volutpat ultricies est id volutpat. Maecenas finibus risus purus, id lobortis urna rutrum id. Sed pellent esquevert pharetra consequat.</p>
            <div>
              <div className='flex items-center mt-4 mb-2'>
                <PersonOutlineOutlinedIcon sx={{ color: "#d1a916" }} />
                <p className='ml-3 mr-2 font-semibold'>Client:</p>
                <p className='text-[#677289]'>John Amanda</p>
              </div>
              <hr className={styles.lines} />
              <div className='flex items-center mt-3 mb-2'>
                <CalendarMonthIcon sx={{ color: "#d1a916" }} />
                <p className='ml-3 mr-2 font-semibold'>Date:</p>
                <p className='text-[#677289]'>26/2/2021</p>
              </div>
              <hr className={styles.lines} />
              <div className='flex items-center mt-3 mb-2' >
                <LocationOnOutlinedIcon sx={{ color: "#d1a916" }} />
                <p className='ml-3 mr-2 font-semibold'>Location:</p>
                <p className='text-[#677289]'>New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 flex items-center mt-8'>
        <div>
          <p className='text-xl text-[#d1a916]'>Our work</p>
          <h2 className='text-4xl mt-3'>Before implementation</h2>
          <p className='mt-3 text-[#677289]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className='flex items-center mt-4'>
            <CheckCircleFilled className='text-[#d1a916] mr-4' />
            <p>Proin gravida nibh vel</p>
          </div>
          <div className='flex items-center mt-2'>
            <CheckCircleFilled className='text-[#d1a916] mr-4' />
            <p>Auctor aliquet aenean quis</p>
          </div>
          <div className='flex items-center mt-2'>
            <CheckCircleFilled className='text-[#d1a916] mr-4' />
            <p>Bibend auctor nisi elit</p>
          </div>
          <p className='mt-4 text-[#677289]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          <Link href="/contact" className='flex items-center mt-5 p-4 px-9 rounded-lg w-1/3 max-lg:w-full text-lg bg-[#d1a916]'>
            Contact us
            <ArrowRightOutlined className='ml-2' />
          </Link>
        </div>
        <div className={`grid grid-cols-2 max-lg:grid-cols-1 gap-4 flex items-center ${styles.bg_wedding}`}>
          <div className='rounded-lg mt-5 mb-5'>
            <Image
              width={300}
              height={200}
              src={"/wedding_hall/1.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
          <div className='rounded-lg mb-7 flex justify-end image_wedding max-lg:justify-start'>
            <Image
              width={200}
              height={150}
              src={"/wedding_hall/2.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
          <div className='rounded-lg mt-5 mb-5'>
            <Image
              width={200}
              height={150}
              src={"/wedding_hall/3.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
          <div className='rounded-lg mb-7 flex justify-end max-lg:justify-start'>
            <Image
              width={300}
              height={200}
              src={"/wedding_hall/4.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 flex max-xl:flex-wrap-reverse items-center mt-8 mb-14'>
        <div className={`grid grid-cols-2 gap-4 flex items-center ${styles.bg_wedding}`}>
          <div className='rounded-lg mt-5 mb-5'>
            <Image
              width={300}
              height={200}
              src={"/wedding_hall/6.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
          <div className='rounded-lg mb-7 flex justify-end'>
            <Image
              width={200}
              height={150}
              src={"/wedding_hall/7.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
          <div className='rounded-lg mt-5 mb-5'>
            <Image
              width={200}
              height={150}
              src={"/wedding_hall/9.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
          <div className='rounded-lg mb-7 flex justify-end'>
            <Image
              width={300}
              height={200}
              src={"/wedding_hall/8.jpeg"}
              className='rounded-lg'
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  </Space>
                ),
              }}
            />
          </div>
        </div>
        <div>
          <p className='text-xl text-[#d1a916]'>Our work</p>
          <h2 className='text-4xl mt-3'>After implementation</h2>
          <p className='mt-3 text-[#677289]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className='flex items-center mt-4'>
            <CheckCircleFilled className='text-[#d1a916] mr-4' />
            <p>Proin gravida nibh vel</p>
          </div>
          <div className='flex items-center mt-2'>
            <CheckCircleFilled className='text-[#d1a916] mr-4' />
            <p>Auctor aliquet aenean quis</p>
          </div>
          <div className='flex items-center mt-2'>
            <CheckCircleFilled className='text-[#d1a916] mr-4' />
            <p>Bibend auctor nisi elit</p>
          </div>
          <p className='mt-4 text-[#677289]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          <Link href="/contact" className='flex items-center mt-5 p-4 px-9 rounded-lg w-1/3 max-lg:w-full text-lg bg-[#d1a916]'>
            Contact us
            <ArrowRightOutlined className='ml-2' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Wedding_hall
