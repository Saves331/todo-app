import { useState, useReducer } from "react"
import AddProjectBtn from "./AddProjectBtn"

const MAX_BOARDS = 8;

type Board = {id: string, name: string}
type State = {
    boards: Board[]
  };
type Action = | {type: "ADD_BOARD"} | {type: "REMOVE_BOARD"; id: string} | {type: "RENAME_BOARD"; id: string; name: string}

  function makeId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function reducer(state: State, action: Action) : State {
    switch (action.type) {
      case "ADD_BOARD": {
        if (state.boards.length >= MAX_BOARDS) return state;
        const nextIndex = state.boards.length + 1;
        return {
          boards: [...state.boards, {id: makeId(), name: `Board ${nextIndex}`}]
        }
      }

      case "REMOVE_BOARD" : {
        return {
          boards: state.boards.filter((board) => board.id !== action.id)
        }
      }

      case "RENAME_BOARD" : {
         const name = action.name.trim();
         return {
          boards: state.boards.map((board) => 
            board.id === action.id ? {...board, name: name.length > 0 ? name : board.name} : board
          )
         }
        }

        default: {
          return state;
        }
  }
}

function BoardCard({
  board,
  onRemove,
  onRename
} : 
{
  board: Board;
  onRemove: () => void;
  onRename: (name: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(board.name);

  function commit() {
    onRename(draft);
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-md mb-4 cardBox active:bg-gray-200 p-3 flex items-center justify-between gap-3">

      <div className="flex-1">
        {!isEditing ? (
          <button className="text-left w-full" onDoubleClick={() => {
            setDraft(board.name);
            setIsEditing(true);
          }}
          title="Double click to edit"
          >
              <h2 className="text-lg font-bold text-brown">{board.name}</h2>
          </button>
        ) : (
          <input
          autoFocus
          value={draft}
          onChange = {(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if(e.key === "Enter") commit();
            if(e.key === "Escape") {
              setDraft(board.name)
              setIsEditing(false)
            }
          }}
          className="w-full border rounded px-2 py-1"
          />
        )}
      </div>


      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setDraft(board.name);
            setIsEditing(true);
          }}
          className="px-2 py-1 rounded border"
        >
          Rename
        </button>
        <button
          onClick={onRemove}
          className="px-2 py-1 rounded border border-red-300 text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default function BoardStash()  {
  const [state, dispatch] = useReducer(reducer, {boards: []});

  const remaining = MAX_BOARDS - state.boards.length;

  function createBoard() {
    if (remaining > 0) dispatch({type: "ADD_BOARD"});
    else alert("Maximum number of boards reached");
  }

  return (
    <div>
      
        {state.boards.map((board) => (
          <BoardCard
            key={board.id}
            board={board}
            onRemove={() => dispatch({type: "REMOVE_BOARD", id: board.id})}
            onRename={(name) => dispatch({type: "RENAME_BOARD", id: board.id, name})}
          />
        ))}
      
      <AddProjectBtn remaining={remaining} createBoard={createBoard}></AddProjectBtn>
    </div>
  )
}


