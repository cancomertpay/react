export default function GridButtons({messageFunc, clearTasks}) {
    return (
        <div className={"grid"}>
            <button onClick={messageFunc}>Add</button>
            <button className={"contrast"} onClick={clearTasks}>Clear</button>
        </div>
    )
}