// components/json-viewer.tsx
'use client'
import dynamic from 'next/dynamic'
import { useTheme } from "next-themes"
import { nordTheme as darkTheme } from '@uiw/react-json-view/nord'
import { lightTheme } from '@uiw/react-json-view/light'

const JsonView = dynamic(() => import('@uiw/react-json-view'), { ssr: false })

export function JsonViewer({ data }: { data: any }) {
    const { resolvedTheme } = useTheme()

    return (
        <JsonView
            value={data}
            style={resolvedTheme === "dark" ? darkTheme : lightTheme}
            collapsed={4}
        />
    )
}

