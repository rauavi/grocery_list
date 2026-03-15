export default function Main({ items, handleCheck, handleDelete }) {

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={item.checked ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(item.id)}
                            >Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty-message">Your list is empty — add something!</p>
            )}
        </main>
    );
}