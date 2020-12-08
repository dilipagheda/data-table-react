import React from 'react';
import ReactDataGrid from 'react-data-grid';
import useRecords from './hooks/useRecords'
import './App.scss';

const columns = [
  { key: "id", name: "ID", editable: false },
  { key: "title", name: "Title", editable: true },
  { key: "first", name: "First Name", editable: true },
  { key: "last", name: "Last Name", editable: true }
];

const App = () => {

  const [records, updateGridRow] = useRecords()

  const callback = (params) => updateGridRow({fromRow: params.fromRow, toRow: params.toRow, updated: params.updated})
  const onClickHandler = () => {
    alert(JSON.stringify(records))
  }

  return (
    <div className="outer-container">
      <h1>My Friends List</h1>
      <p>double click on any column except ID and you can edit it.</p>
      <div className="inner-container">
        <ReactDataGrid
          columns={columns}
          rowGetter={i => records[i]}
          rowsCount={records.length}
          onGridRowsUpdated={callback}
          enableCellSelect={true}
          minHeight={550}
        />
      </div>
      <button className="submit-button" onClick={onClickHandler}>Submit</button>
    </div>
  );
};

export default App;
