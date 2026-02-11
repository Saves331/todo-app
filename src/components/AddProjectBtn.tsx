type Props = {
    remaining: number
    createBoard: () => void
}


function AddProjectBtn({remaining, createBoard}: Props) {
  return (
    <button className="text-center gap-3 py-7 px-4 w-full
    select-none
  border-orange-dark 
bg-orange rounded-md cursor-pointer shadow-md
click:shadow-md shadow-peach transition-all duration-150 ease-in-out
  active:scale-99 active:bg-dark-orange active:shadow-none"
    onClick={createBoard}
>



        <h2 className="text-lg font-bold text-brown">
            Create new board
        </h2>
        <h3 className="text-sm text-brown">
            {remaining} remaining
        </h3>
    </button>
  )
}

export default AddProjectBtn