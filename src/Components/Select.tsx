import React from 'react'

interface Props {
  selectedField: string,
  setSelectedField: (selectedField: string) => void;
  items: string[];
}

const Select = ({selectedField, setSelectedField, items}: Props) => {
  return (
    <div className='selectdiv'>
      <select id='dropdown' onChange={(evt: React.ChangeEvent<HTMLSelectElement>):void => setSelectedField(evt.target.value)} value={selectedField}>
        <option defaultValue=''></option>
          {
            items.map((item, idx) => {
                return <option key={idx} value={item}>{item}</option>
            })
          }
      </select>
    </div>
)};

export default Select;