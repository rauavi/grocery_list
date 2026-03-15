import React from 'react'

export default function AddItem({ newItem, setNewItem, handleSubmit }) {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add item</label>
            <input
                type='text'
                id='addItem'
                placeholder='Add item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    )
}