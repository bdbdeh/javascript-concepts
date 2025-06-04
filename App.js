import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "12344", className: "title" },
  "Hello all welcome to React"
);

const parentheading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1-1" }, "Created structure div"),
    React.createElement("h1", { key: "h1-2" }, "Hello React"),
  ])
);

const renderBothComponents = React.createElement(
  React.Fragment,
  {},
  heading,
  parentheading
);
function UniqueKeyExample() {
  const [items, setItems] = useState([
    { id: "a", name: "Apple" },
    { id: "b", name: "Banana" },
    { id: "c", name: "Cherry" },
  ]);

  const removeFirstItem = () => {
    setItems(items.slice(1));
  };

  return (
    <div>
      <h2>Using Unique ID as Key</h2>
      <button onClick={removeFirstItem}>Remove First Item</button>
      {items.map((item) => (
        <input key={item.id} defaultValue={item.name} />
      ))}
    </div>
  );
}

function IndexKeyExample() {
  const [items, setItems] = useState([
    { name: "Apple" },
    { name: "Banana" },
    { name: "Cherry" },
  ]);

  const removeFirstItem = () => {
    setItems(items.slice(1));
  };

  console.log(items);

  return (
    <div>
      <h2>Using Index as Key</h2>
      <button onClick={removeFirstItem}>Remove First Item</button>
      {items.map((item, index) => (
        <input
          key={index}
          value={item.name}
          onChange={(e) => {
            const newItems = [...items];
            newItems[index].name = e.target.value;
            setItems(newItems);
          }}
        />
      ))}
    </div>
  );
}

function KeyDemo() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);

  console.log(items, "secondddddddddd")
  const [useIndexAsKey, setUseIndexAsKey] = useState(true);

  const handleChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], name: value };
    setItems(updatedItems);
  };

  const sortItems = () => {
    const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sorted);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React Key Demo</h2>
      <button onClick={sortItems}>Sort Alphabetically</button>
      <label style={{ marginLeft: 10 }}>
        <input
          type="checkbox"
          checked={useIndexAsKey}
          onChange={() => setUseIndexAsKey(!useIndexAsKey)}
        />
        Use index as key
      </label>

      <div style={{ marginTop: 20 }}>
        {items.map((item, index) => (
          <div key={useIndexAsKey ? index : item.id} style={{ marginBottom: 10 }}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleChange(index, e.target.value)}
              style={{ width: 200 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


function MouseEvent({ render }) {
  return (
    <div style={{ height: "100vh" }}>
      {render()}
      {UniqueKeyExample()}
      {IndexKeyExample()}
      {KeyDemo()}
    </div>
  );
}
const setupRoot = ReactDOM.createRoot(document.getElementById("root"));
setupRoot.render(
  <MouseEvent
    render={() => {
      return <div>welcome to render props</div>;
    }}
  />
);
