import React from 'react';

interface Props {
    fieldList: string[] | undefined;
    deleteListItem: (id: number) => void;
}

const List = ({ fieldList, deleteListItem}: Props) => {
  return(
    <div className='list'>
      <ul className='unorderedlist'>
        {
          fieldList && fieldList.map((item: string, idx: number) => {
            return <li key={idx}>{item}
                     <button onClick={(evt: React.MouseEvent<HTMLElement>): void => deleteListItem(idx)}>X</button>
                   </li>
          })
        }
      </ul>
    </div>
  )
}

export default List;
