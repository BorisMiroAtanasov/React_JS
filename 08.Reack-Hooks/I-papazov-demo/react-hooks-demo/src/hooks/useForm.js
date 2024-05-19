import { useState, useEffect } from "react"


export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setVormValues] = useState(initialValues)

    const onChangeHandler = (e) => {
        setVormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (onSubmitHandler) {
            onSubmitHandler(formValues)

        }
    }

    return {
        formValues,
        onChangeHandler,
        onSubmit,
    }


}