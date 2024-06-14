"use client"

import React from "react"

type IGame = {
    id: number
    position: string
    fighter: string | undefined
    points: number
    result: boolean | null
    wazari: number
    ippon: number
    jogai: number
    keikoku: number
    chui: number
    hansuko: number
}

interface ContextProps {
    game: IGame[]
    setFighter: (id: number, username: string) => void
    setWazari: (id: number) => void
}

interface ProviderProps {
    children: React.ReactNode
}

const GameContext = React.createContext({} as ContextProps)

export function useGame() {
    const context = React.useContext(GameContext)
    if (!context) {
        throw new Error("useGame must be used within a GameProvider")
    }
    return context
}

export const GameProvider: React.FC<ProviderProps> = ({ children }) => {
    const [game, setGame] = React.useState<IGame[]>([
        { id: 1, position: "AKA", fighter: undefined, points: 0, result: null, wazari: 0, ippon: 0, jogai: 0, keikoku: 0, chui: 0, hansuko: 0 },
        { id: 2, position: "SHIRO", fighter: undefined, points: 0, result: null, wazari: 0, ippon: 0, jogai: 0, keikoku: 0, chui: 0, hansuko: 0 },
    ])

    const setFighter = (id: number, username: string) => {
        setGame(prevGame =>
            prevGame.map(g =>
                g.id === id ? { ...g, fighter: username } : g
            )
        )
    }

    const setWazari = (id: number) => {
        let updResult: null | boolean = null
        const updateGame = game.map(item => {
            if (item.id === id) {

                if (item.wazari + 1 === 2) {
                    updResult = true
                } else {
                    updResult = null
                }

                return {
                    ...item,
                    wazari: item.wazari + 1,
                    points: item.points + 4,
                    result: updResult
                }
            }

            if (item.id !== id && updResult === true) {
                return {
                    ...item,
                    result: false
                }
            }

            return item
        })

        setGame(updateGame)
    }

    return (
        <GameContext.Provider
            value={{
                game, setFighter, setWazari
            }}
        >
            {children}
        </GameContext.Provider>
    )
}