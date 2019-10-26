import React, {useState} from 'react';
import './App.css';
import Select from './Components/Select';

const App: React.FC = () => {
  // value of the selected field in the Select component
  const [selectedField, setSelectedField] = useState<string>('');
  // stores an array of values that has been added to the list component
  const [fieldList, setFieldList] = useState<string[] | undefined>([]);
  let items = ['apple', 'orange', 'banana', 'mango'];
  return (
    <div className="App">
      <Select selectedField={selectedField} setSelectedField={setSelectedField} items={items}/>
    </div>
  );
}

export default App;
