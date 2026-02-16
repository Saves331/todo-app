import {useParams} from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "todo-app-boards";

type Board = {id: string, name: string}

function LoadBoards(): Board[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}  


function BoardPage() {
  const {id} = useParams<{id: string}>();
  const [boards, setBoards] = useState<Board[]>([])

  useEffect(() => {
    setBoards(LoadBoards());

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setBoards(LoadBoards());
      }
    }

    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    }
  }, []);


  const board = useMemo(() => boards.find((b) => b.id === id), [boards, id])

  if (!board) {
    return (
      <div>
        <h1>Board Not Found</h1>
      </div>
    )
  }


if (!id) {
    return (
      <div>
        <h1>Invalid Board ID</h1>
      </div>
    )
  }

  return (
    <div>
      <Header />
        <h1>{board?.name}</h1>


        <h1>Board ID: {id}</h1>
    </div>
  )
}

export default BoardPage