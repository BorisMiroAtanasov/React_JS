import { useState } from "react"

export default function UseForm(initialVAlue, onSubmitHandler){
    const [formValue, setFormValue] = useState(initialVAlue)

    const  onChangeHandlar = (e) => setFormValue(state => ({...state, [e.target.name]: e.target.value}))

    const onSubmit =(e) => {

        e.preventDefault();
        if(onSubmitHandler){
            onSubmitHandler(formValue)
        }
    }

    return {
        formValue,
        onChangeHandlar,
        onSubmit
    }
}