export default function SearchItem({ search, setSearch }) {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                type="text"
                id='search'
                role="seacrchbox"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}></input>
        </form>
    );
}