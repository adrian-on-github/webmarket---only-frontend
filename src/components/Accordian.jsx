import { useState, createContext, useContext, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

const AccordianContext = createContext()

export default function Accordian({ children, value, onChange, ...props}) {
    const [selected, setSelected] = useState(value)

    useEffect(() => {
        onChange?.(selected)
    }, [selected])

    return (
        <ul {...props} className="flex flex-wrap justify-between">
            <AccordianContext.Provider value={{selected, setSelected}}>
                {children}
            </AccordianContext.Provider>
        </ul>
    )
}

export function AccordianItem({children, value, trigger, ...props}) {
    const {selected, setSelected} = useContext(AccordianContext)
    const open = selected === value
    const ref = useRef(null)

    return (
        <li className="w-1/3 p-2 mb-2" {...props}>
            <header className="flex justify-between items-center p-4 font-medium cursor-pointer" role="button" onClick={() => setSelected(open ? null : value)}>
                {trigger}
                <ChevronDown size={20} className={`transition-transform ${open ? "rotate-180" : ""}`}/>
            </header>
            <div className="overflow-y-hidden transition-all text-sm" style={{height: open ? ref.current?.offsetHeight || 0 : 0}}>
                <div className="p-2 pb-2" ref={ref}>{children}</div>
            </div>
        </li>
    )
}
