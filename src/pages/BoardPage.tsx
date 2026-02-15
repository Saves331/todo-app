import {useParams} from "react-router-dom";

function BoardPage() {
  const {id} = useParams<{id: string}>();

if (!id) {
    return (
      <div>
        <h1>Invalid Board ID</h1>
      </div>
    )
  }

  return (
    <div>
        <h1>Board ID: {id}</h1>
    </div>
  )
}

export default BoardPage