type Props = {
    remaining: number
}


function AddProjectBtn({remaining}: Props) {
  return (
    <div className="text-center gap-3 py-7 px-4 
border-2 border-dashed border-orange-dark 
bg-orange rounded-md cursor-pointer
shadow-[0px_2px_5px_-1px_rgba(50,50,93,0.25),_0px_1px_3px_-1px_rgba(0,0,0,0.3)]
hover:shadow-[0px_4px_10px_-1px_rgba(50,50,93,0.35),_0px_2px_6px_-1px_rgba(0,0,0,0.4)]
transition-shadow duration-200">



        <h2 className="text-lg font-bold text-brown">
            Create new board
        </h2>
        <h3 className="text-sm text-brown">
            {remaining} remaining
        </h3>
    </div>
  )
}

export default AddProjectBtn