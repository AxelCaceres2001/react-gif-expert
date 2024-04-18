import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState()

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newInputValue = inputValue.trim();

        if(newInputValue.length <= 1) return;

        setinputValue('');

        onNewCategory(newInputValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
