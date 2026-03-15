export default function Footer({ length }) {
    return (
        <footer>
            <p>{length === 1 ? 'item' : 'items'}</p>
        </footer>
    );
}