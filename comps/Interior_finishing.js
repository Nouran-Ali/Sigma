import {
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { Image, Space } from 'antd';
import { useState, useEffect } from 'react';

const images = ['/../Interior_finishing/5.jpeg',
    '/../Interior_finishing/27.jpeg',
    '/../Interior_finishing/10.jpeg',
    "/../Interior_finishing/28.jpeg"];

const images2 = ['/../Interior_finishing/1.jpeg',
    '/../Interior_finishing/26.jpeg',
    '/../Interior_finishing/15.jpeg',
    "/../Interior_finishing/6.jpeg"];

const images3 = ['/../Interior_finishing/10.jpeg',
    '/../Interior_finishing/16.jpeg',
    '/../Interior_finishing/17.jpeg',
    "/../Interior_finishing/18.jpeg"];

const images4 = ['/../Interior_finishing/4.jpeg',
    '/../Interior_finishing/19.jpeg',
    '/../Interior_finishing/20.jpeg',
    "/../Interior_finishing/21.jpeg"];

const images5 = ['/../Interior_finishing/7.jpeg',
    '/../Interior_finishing/22.jpeg',
    '/../Interior_finishing/23.jpeg',
    "/../Interior_finishing/24.jpeg"];

const Interior_finishing = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    const [currentImage, setCurrentImage] = useState(0);
    const mediaQuery = window.matchMedia('(max-width: 1280px)');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            setCurrentImage((prevImage) => (prevImage + 1) % images2.length);
            setCurrentImage((prevImage) => (prevImage + 1) % images3.length);
            setCurrentImage((prevImage) => (prevImage + 1) % images4.length);
            setCurrentImage((prevImage) => (prevImage + 1) % images5.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={`flex flex-col md:flex-row md:items-start ${language == "ar" ? "" : "md:items-start"}`} dir={language == "ar" ? "rtl" : "ltr"}>
                <div className='mb-5 md:mr-5 max-md:mx-auto'>
                    <Image
                        width={mediaQuery.matches ? 300 : 250}
                        height={mediaQuery.matches ? 300 : 200}
                        src={images[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                        className='rounded-lg image_ourWork animation_ourwork'
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

                <div className='mb-5 md:mr-5 max-md:mx-auto large_image_ourWork'>
                    <Image
                        width={mediaQuery.matches ? 300 : 300}
                        height={mediaQuery.matches ? 300 : 300}
                        src={images2[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                        className='rounded-lg image_ourWork large_image_ourWork animation_center_image'
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
                <div className='mb-5 md:mr-5 max-md:mx-auto'>
                    <Image
                        width={mediaQuery.matches ? 300 : 250}
                        height={mediaQuery.matches ? 300 : 200}
                        src={images3[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                        className='rounded-lg image_ourWork animation_ourwork'
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

            <div className='flex flex-col md:flex-row md:items-start'>
                <div className={`${language == "ar" ? "images_position_right_Ar" : "images_position_right"} mb-5 md:mr-5 max-md:mx-auto`}>
                    <Image
                        width={mediaQuery.matches ? 300 : 250}
                        height={mediaQuery.matches ? 300 : 200}
                        src={images4[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                        className='rounded-lg image_ourWork animation_ourwork'
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
                <div className={`${language == "ar" ? "images_position_left_ar" : "images_position_left"} mb-5 md:mr-5 max-md:mx-auto`}>
                    <Image
                        width={mediaQuery.matches ? 300 : 250}
                        height={mediaQuery.matches ? 300 : 200}
                        src={images5[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                        className='rounded-lg image_ourWork animation_ourwork'
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
        </>
    )
}

export default Interior_finishing
