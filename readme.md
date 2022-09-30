
# React Menu Tree

Highly customizable and simple tab menu tree component 

![](https://github.com/GM1957/react-menu-tree/blob/main/assets/menu-tree-example.gif)
## Installation

Install the library using your favorite dependency manager:

```bash
  npm install react-menu-tree --save
```

Or using yarn:

```bash
  yarn add react-menu-tree
```
        
## Usage/Examples

```javascript
import React, { useEffect, useState } from "react";
import { MenuTree, nodeClickHandler } from "react-menu-tree";

function App() {
  const [rows, setRows] = useState([]);

  const data = [
    {
      name: "Edna Ray",
      children: [
        { name: "Jim Spencer" },
        {
          name: "Lee Carter",
        },
        {
          name: "Frankie Santiago",
          children: [
            {
              name: "Oscar Hicks",
            },
            {
              name: "Willis Warren",
            },
          ],
        },
        {
          name: "Philip Massey",
        },
      ],
    },
    {
      name: "Jennifer Mason",
    },
    {
      name: "Jimmie Potter",
      children: [
        {
          name: "Isabel Blake",
        },
        { name: "Daryl Banks" },
      ],
    },
    {
      name: "Claudia Moore",
    },
  ];

  const CustomNodeComponent = ({ rowNumber, nodeData, activeNodeIndex }) => {
    return (
      <div
        onClick={() => {
          setRows((oldData) => {
            return nodeClickHandler({
              rowNumber,
              nodeData,
              activeNodeIndex,
              rowData: oldData,
            });
          });
        }}
        style={{
          padding: "10px",
          borderBottom: nodeData?.isNodeActive ? "1px solid red" : "none",
        }}
        key={"row-node-" + activeNodeIndex}
      >
        {nodeData?.name}
      </div>
    );
  };

  // for first time data mount in the component 
  useEffect(() => {
    setRows((oldData) => {
      return nodeClickHandler({
        rowNumber: -1,
        nodeData: { children: data },
        activeNodeIndex: 0,
        rowData: oldData,
      });
    });
  }, []);

  return (
    <div className="App">
      <MenuTree rows={rows} CustomNodeComponent={CustomNodeComponent} />
    </div>
  );
}

export default App;


```


## API Reference

### CustomNodeComponent

#### make your custom node component, you will get some necessary details in props 

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nodeData` | `{ isNodeActive: boolean }` | from nodeData prop we will get isNodeActive status also will other details which are defined in data |
| `rowNumber` | `number` | clicked row number |
| `activeNodeIndex` | `number` | this active node index will give the index of clicked node |


