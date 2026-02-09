// components/json-viewer.tsx
'use client'

import dynamic from 'next/dynamic'

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false })

export function JsonViewer({ data }: { data: any }) {
    return (
        <ReactJson
            src={data}
            theme="monokai"
            collapsed={3}
            displayDataTypes={false}
        />
    )
}

