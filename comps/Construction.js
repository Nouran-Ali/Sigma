import {
    DownloadOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';

import { Image, Space } from 'antd';
const src1 = '../1.webp';
const src2 = '../2.webp';
const src3 = '../3.webp';
const src4 = '../4.webp';

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
        <div>
            <Image
                width={300}
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

            <Image
                width={300}
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

            <Image
                width={300}
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

            <Image
                width={300}
                src={src4}
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
    )
}

export default Construction
