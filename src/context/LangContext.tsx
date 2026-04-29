import React, { createContext, useContext, useState } from 'react'

type Lang = 'uz' | 'ru'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (uz: string, ru: string) => string
}

const LangContext = createContext<LangCtx>({
  lang: 'uz',
  setLang: () => {},
  t: (uz) => uz,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('uz')
  const t = (uz: string, ru: string) => lang === 'uz' ? uz : ru
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
