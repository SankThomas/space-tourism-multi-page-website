import { useState } from "react"
import data from "../starter-code/data.json"

export default function Destination() {
  const [planets, setPlanets] = useState(data)
  const [value, setValue] = useState(0)

  return (
    <>
      <section className="home destinations">
        <div className="overlay">
          <article>
            <h2>
              <span>01</span> Pick your destination
            </h2>
          </article>
        </div>
      </section>
    </>
  )
}
