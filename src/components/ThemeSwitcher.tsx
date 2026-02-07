'use client'

import { useState, useEffect } from 'react'

const THEMES = [
  { id: 'dark', label: 'Dark', color: '#0D0D1A', accent: '#C4302B' },
  { id: 'light', label: 'Light', color: '#F8F9FA', accent: '#B82A25' },
  { id: 'green', label: 'Green', color: '#F5F7F5', accent: '#3D9B42' },
  { id: 'warm', label: 'Warm', color: '#1C1410', accent: '#D4654A' },
] as const

type ThemeId = (typeof THEMES)[number]['id']

export function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeId>('dark')
  const [expanded, setExpanded] = useState(false)

  // Initialize from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('perunhr-theme') as ThemeId | null
    if (saved && THEMES.some((t) => t.id === saved)) {
      setActive(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  const switchTheme = (id: ThemeId) => {
    setActive(id)
    document.documentElement.setAttribute('data-theme', id)
    localStorage.setItem('perunhr-theme', id)
  }

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      {/* Expanded panel */}
      {expanded && (
        <div className="mb-3 bg-[#1a1a1a] border border-white/10 rounded-xl p-3 shadow-2xl">
          <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2.5 px-1">
            Theme
          </p>
          <div className="flex flex-col gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => switchTheme(theme.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  active === theme.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full border-2 flex-shrink-0"
                  style={{
                    backgroundColor: theme.color,
                    borderColor: theme.accent,
                  }}
                />
                <span className="font-medium">{theme.label}</span>
                {active === theme.id && (
                  <span className="ml-auto text-xs" style={{ color: theme.accent }}>
                    Active
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-11 h-11 rounded-full bg-[#1a1a1a] border border-white/10 shadow-2xl flex items-center justify-center hover:border-white/25 transition-all"
        aria-label="Toggle theme switcher"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </button>
    </div>
  )
}
