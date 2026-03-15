export default function Footer({ length }) {
    return (
        <footer>
            <p>
                {length === 0
                    ? 'No items yet'
                    : `${length} ${length === 1 ? 'item' : 'items'} in your list`}
            </p>
        </footer>
    );
}