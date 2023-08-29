import {
    DownloadOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
const src1 = '../16.jpg';
const src2 = '../17.jpg';
const src3 = '../18.jpg';
const src4 = '../19.jpg';
const src5 = '../20.jpg';


const Construction = () => {

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
            <div className='flex items-start'>
                <div>
                    <Image
                        width={250}
                        height={200}
                        src={src1}
                        className='rounded-lg animation_ourwork'
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
                        className='rounded-lg image_ourWork animation_ourwork_image'
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
                        width={250}
                        height={200}
                        src={src4}
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

            <div className='flex self-start'>
                <div className='images_ourwork'>
                    <Image
                        width={250}
                        height={200}
                        src={src3}
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
        </>
    )
}

export default Construction
