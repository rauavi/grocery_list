import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import { useState } from "react";
import AddItem from './AddItem';
import SearchItem from './searchItem';

function App() {
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const itemList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(itemList);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
      (item.id !== id));
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="app-container">
      <Header />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Main
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
