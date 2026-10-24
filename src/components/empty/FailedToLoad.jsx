const FailedToLoad = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h3 className="font-bold text-[1.5rem] mb-1">This page didn't load</h3>
            <p className="text-LIGHT-TEXT ">Something went wrong on our end. You can try refreshing or head back home.</p>

            <div className="flex gap-2 mt-4">  <button className="text-white bg-GREEN rounded-md px-2 py-0.5">Try again</button>
                <button className="border border-BORDER rounded-md px-2 py-0.5">Go home</button>
            </div>
        </div>
    )
}

export default FailedToLoad