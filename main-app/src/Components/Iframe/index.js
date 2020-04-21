import React from 'react';

const style = {
    borderColor: '#61dafb',
    borderRadius: '20px'
}

export default function Iframe({
    src,
    iframeRef,
    width,
    height,
}) {
    return <iframe ref={iframeRef} style={style} src={src} width={width} height={height} />;
}