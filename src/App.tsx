import React, {useState} from 'react';
import './App.css';
import Select from './Components/Select';
import AddButton from './Components/AddButton';
import List from './Components/List';

const App: React.FC = () => {
  // value of the selected field in the Select component
  const [selectedField, setSelectedField] = useState<string>('');
  // stores an array of values that has been added to the list component
  const [fieldList, setFieldList] = useState<string[] | undefined>([]);

  let items = ['apple', 'orange', 'banana', 'mango'];

  const deleteListItem = (id: number) => {
    setFieldList(fieldList && fieldList.filter((item, idx) => idx !== id ))
  }

  const checkButtonValue = () => {
    if(selectedField === '') {
      return true
    } else {
      return false
    }
  }
  return (
    <div className="App">
      <Select selectedField={selectedField} setSelectedField={setSelectedField} items={items}/>
      <AddButton selectedField={selectedField} checkButtonValue={checkButtonValue} fieldList={fieldList} setFieldList={setFieldList}/>
      <List fieldList={fieldList} deleteListItem={deleteListItem}/>
    </div>
  );
}

export default App;
