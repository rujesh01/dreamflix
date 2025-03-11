"use client"
import { useTheme } from "next-themes"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function ThemeToggleSwitch() {
  const { theme, setTheme } = useTheme()

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex items-center">
      <Switch id="theme-mode" checked={theme === "dark"} onCheckedChange={handleChange} />
      <Label htmlFor="theme-mode" className="ml-2">
        Dark Mode
      </Label>
    </div>
  )
}

