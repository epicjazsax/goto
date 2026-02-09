// components/theme-switch.tsx
"use client"

import { useTheme } from "next-themes"
// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
// import { FiSun, FiMoon, FiYoutube, FiGithub } from 'react-icons/fi'
import { RiSunLine, RiMoonLine, RiSunFill, RiMoonFill } from '@remixicon/react'

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

            {/*
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
      */}

            {/*
      <Label htmlFor="theme-switch">{theme === "dark" ? "Dark" : "Light"} Mode</Label>
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      */}

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

