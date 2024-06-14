'use client'

import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { useGame } from "@/context/game"
import { Buttons, Fighter } from "@/partials"

export default function Page() {
  const { game } = useGame()

  return (
    <div className='w-screen h-screen container grid grid-cols-2 gap-4 py-40'>
      {game.map((items, index) => (
        <Card className="relative" key={index}>
          <CardHeader className="flex justify-center items-center">
            <h1 className="text-2xl font-bold">
              {items.position}
            </h1>
            <h2 className='text-xl font-bold'>
              {items.fighter ? items.fighter : "Sem jogador..."}
            </h2>
            {items.fighter ? null : <Fighter id={items.id} />}
          </CardHeader>
          <div className="mt-28 flex justify-center items-center">
            <Buttons id={items.id} />
          </div>
          <CardFooter className='flex justify-center mt-20'>
            <p>
              <strong>TOTAL: </strong>
              {items.result ? <span>VENCEDOR</span> : items.result === false ? <span>PERDEDOR</span> : <span>{items.points}</span>}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
