export default function Typography () {
    return (
        <div className="mt-[50px]">
            <p>Typography Info</p>
            <div className="flex w-full font-mono">
            <div className="w-4/6 bg-gray-400 h-auto">
                <div><h1>Header 1</h1></div>
                <div><h2>Header 2</h2></div>
                <div><h3>Header 3</h3></div>
                <div><h4>Header 4</h4></div>
                <div><h5>Header 5</h5></div>
                <div><h6>Header 6</h6></div>
            </div>
            <div className="w-2/6 bg-gray-500 h-auto">
                <div><h1>Header 1 Size</h1></div>
                <div><h2>Header 2 Size</h2></div>
                <div><h3>Header 3 Size</h3></div>
                <div><h4>Header 4 Size</h4></div>
                <div><h5>Header 5 Size</h5></div>
                <div><h6>Header 6 Size</h6></div>
            </div>
            </div>
        </div>
    )
}