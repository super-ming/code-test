import React from 'react';

interface Props {
  checkButtonValue: (selectedValue: any) => boolean | undefined;
  setFieldList: (selectedValue: any) => void;
  fieldList: string[] | undefined; 
  selectedField: string ;
}

const AddButton = ({checkButtonValue, setFieldList, fieldList, selectedField}: Props) => {
  return(
      <div className='addbutton'>
        <button disabled={checkButtonValue(selectedField)} onClick={() => setFieldList([...fieldList, selectedField])}>
            Add to list
        </button>
      </div>
  )

}

export default AddButton;