import {
    DownloadOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { Carousel, Image, Space } from 'antd';
const src1 = '../13.png';
const src2 = '../14.png';
const src3 = '../15.jpg';
const src4 = '../9.png';
const src5 = '../10.png';
const src6 = '../11.png';
const src7 = '../12.png';

const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};

const Supervision = () => {

    const onDownload = () => {
        fetch(src1)
            .then((response) => response.blob())
            .then((blob) => {
                const url = URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.download = 'image.png';
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(url);
                link.remove();
            });
    };

    return (
        <>

            <Carousel autoplay>
                <div>
                    <div className='flex items-start'>
                        <div>
                            <Image
                                width={300}
                                height={300}
                                src={src1}
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
                                            <DownloadOutlined onClick={onDownload} />
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

                        <div className='ml-5'>
                            <Image
                                width={300}
                                height={300}
                                src={src2}
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
                                            <DownloadOutlined onClick={onDownload} />
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
                        <div className='ml-5'>
                            <Image
                                width={300}
                                height={300}
                                src={src3}
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
                                            <DownloadOutlined onClick={onDownload} />
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
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>



            {/* <div className='flex self-start'>
                <div className='images_ourwork'>
                    <Image
                        width={250}
                        height={200}
                        src={src3}
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
                                    <DownloadOutlined onClick={onDownload} />
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
                <div className='images_ourwork_center'>
                    <Image
                        width={250}
                        height={100}
                        src={src6}
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
                                    <DownloadOutlined onClick={onDownload} />
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
                <div className='images_ourwork_left'>
                    <Image
                        width={250}
                        height={200}
                        src={src5}
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
                                    <DownloadOutlined onClick={onDownload} />
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
            </div> */}
        </>
    )
}

export default Supervision
