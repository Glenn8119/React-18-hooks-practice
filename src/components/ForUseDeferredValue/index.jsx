import { useState } from "react"
import List from "./List"

const ForUseDeferredValue = () => {
    const [input, setInput] = useState('')
    
    return (
        <>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <List input={input}/>
        </>
    )
}

export default ForUseDeferredValue