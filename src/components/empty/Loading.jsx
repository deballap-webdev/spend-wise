const Loading = () => {
    return (
        <div className="h-[calc(100vh-100px)] grid grid-cols-6 gap-x-4 gap-y-6 grid-rows-[1fr_3fr_4fr] p-3">
            <div className="bg-LIGHT-GREEN col-start-1 col-end-2 row-start-1 row-end-2 rounded-md"></div>

            <div className="bg-LIGHT-GREEN col-start-1 col-end-3 row-start-2 row-end-3  rounded-md">

            </div>
            <div className="bg-LIGHT-GREEN col-start-3 col-end-5 row-start-2 row-end-3 rounded-md">

            </div>
            <div className="bg-LIGHT-GREEN col-start-5 col-end-7 row-start-2 row-end-3 rounded-md">

            </div>

            <div className="bg-LIGHT-GREEN col-start-1 col-end-7 row-start-3 row-end-4 rounded-md"></div>
        </div>

    )
}

export default Loading