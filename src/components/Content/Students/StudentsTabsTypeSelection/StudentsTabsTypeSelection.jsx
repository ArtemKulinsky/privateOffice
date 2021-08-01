import React, { useState } from 'react';
import './StudentsTabsTypeSelection.scss'
import StudentsTabTypeSelection from './StudentsTabTypeSelection/StudentsTabTypeSelection';

const StudentsTabsTypeSelection = ({tabsTypes}) => {
  let [idActiveItem, setActiveItem] = useState(0)

  return(
    <div
      className="students__tabs-type-selection tabs-type-selection"
    >
      {
        tabsTypes.map((item, id) => (
          <StudentsTabTypeSelection
            text={item}
            key={id}
            id={id}
            idActiveItem={idActiveItem}
            setActiveItem={setActiveItem}
          />
        ))
      }
    </div>
  )
}

export default StudentsTabsTypeSelection;