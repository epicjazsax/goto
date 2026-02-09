"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { RiSunLine, RiMoonLine } from '@remixicon/react'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded"
            >
                {theme === 'dark' ? (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <RiSunLine />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>View with light background</p>
                        </TooltipContent>
                    </Tooltip>
                ) : (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <RiMoonLine />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>View with dark background</p>
                        </TooltipContent>
                    </Tooltip>
                )}
            </button>
        </div>
    )
}

