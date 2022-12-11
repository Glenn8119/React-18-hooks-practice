import { startTransition } from "react"
import { useState } from "react"

const ForUseTransition = () => {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const LIST_SIZE = 50000

    const handleChange = (e) => {
        setInput(e.target.value)
        startTransition(() => {
            const l = []
            for(let i=0 ; i<LIST_SIZE ; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    return (
        <>
            <input type='text' value={input} onChange={handleChange} />
            {list.map((item, index) => {
                return <button key={index}>{item}</button>
            })}
        </>
    )
}

export default ForUseTransition
