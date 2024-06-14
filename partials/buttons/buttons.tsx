import React from "react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { useGame } from "@/context/game"

interface ButtonsProps {
    id: number
}

export const Buttons: React.FC<ButtonsProps> = ({ id }) => {
    const { setWazari } = useGame()

    const handleButtonClick = (action: (id: number) => void) => {
        return () => action(id)
    }

    const ButtonsMap = [
        { name: "WAZARI", action: setWazari },
        { name: "IPPON", action: setWazari },
        { name: "JOGAI", action: setWazari },
        { name: "KEI-KOKU", action: setWazari },
        { name: "CHUI", action: setWazari },
        { name: "HAN-SUKO", action: setWazari },
    ]

    return (
        <CardContent className="grid grid-cols-3 gap-4">
            {ButtonsMap.map((item, index) => (
                <Button onClick={handleButtonClick(item.action)} key={index}>
                    {item.name}
                </Button>
            ))}
        </CardContent>
    )
}
