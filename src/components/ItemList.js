import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, delItem } from './redux/actions';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.addItem);

  const handleAddItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (item) => {
    dispatch(delItem(item));
  };

  return (
    <div>
      <h1>Item List</h1>
      <button onClick={handleAddItem}>Add Item (+)</button>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleRemoveItem(item)}>Remove Item (-)</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
