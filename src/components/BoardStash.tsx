import { useState } from "react"
import AddProjectBtn from "./AddProjectBtn"

function BoardStash() {

  const [remaining, setRemaining] = useState(8);
  return (
    <div>
        <AddProjectBtn remaining={remaining} />
    </div>
  )
}

export default BoardStash