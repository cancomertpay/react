export default function Input({text, onChangeFunc}) {
    return (
        <input 
        value={text} 
        onChange={onChangeFunc} 
        placeholder="Todo" 
        />
    )
}