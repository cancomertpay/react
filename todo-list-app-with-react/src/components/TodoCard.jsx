import RemoveBtn from "./RemoveBtn";

export default function TodoCard({text, removeTask}) {
  const cardStyle = {
    display: "flex",
    justifyContent: "space-between", 
    cursor: "pointer",
  }

  return (
    <>
      <article style={cardStyle}>
        {text}
        <RemoveBtn text={text} removeTask={removeTask} />
      </article>
    </>
  )
}