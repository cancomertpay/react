import { AiFillDelete } from "react-icons/ai";

export default function RemoveBtn({text, removeTask}) {
    return (
        <a style={{cursor: "pointer"}} onClick={() => removeTask(text)}><AiFillDelete /></a>
    )
}