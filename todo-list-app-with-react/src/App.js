import { useState } from "react";
import GridButtons from "./components/GridButtons";
import TodoCard from "./components/TodoCard";
import Hgroup from "./components/Hgroup";
import Input from "./components/Input";

function App() {
  const [text, setText] = useState("")
  const [msg, setMsg] = useState([])

  const onChangeFunc = (event) => {
    setText(event.target.value)
  }

  const messageFunc = () => {
    if(text !== '' && text !== ' ') {
      setMsg(prev => [text, ...prev])
      setText('')
    }
    return;
  }
  
  const removeTask = (text) => {
    const newText = msg.filter(item => item !== text)
    setMsg(newText)
  }

  const clearTasks = () => {
    setMsg([])
  }


  return (
    <div className="container">
      <Hgroup />

      <Input text={text} onChangeFunc={onChangeFunc} />

      <GridButtons messageFunc={messageFunc} clearTasks={clearTasks} />
      
      {
        msg?.map((item, index) => <TodoCard key={index} text={item} removeTask={removeTask} />)
      }
    </div>
  )
}

export default App;
