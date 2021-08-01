import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { compose } from 'redux';
import WithWindowSizes from '../../../../hoc/WithWindowSizes';
import StudentsItem from './StudentsItem/StudentsItem';
import './StudentsTabs.scss'

function slideToPrevious(
  itemSize, trackLeftPos, setItemsTrackLeftPos, 
  trackTopPos, setItemsTrackTopPos, windowWidth,
  windowWidthTabsToColumn, slideSteps) {

  let position;
  
  if(windowWidth >= windowWidthTabsToColumn) {
    position = trackLeftPos;

    position += itemSize * slideSteps;
    position = Math.min(position, 0);

    setItemsTrackLeftPos(position);
  } else {
    position = trackTopPos;

    position += itemSize * slideSteps;
    position = Math.min(position, 0);
    setItemsTrackTopPos(position)
  }
}

function slideToNext(itemSize, track, trackLeftPos, 
  setItemsTrackLeftPos, trackTopPos, setItemsTrackTopPos, 
  windowWidth, windowWidthTabsToColumn, slideSteps,
  itemsList) {

  let position;

  if(windowWidth >= windowWidthTabsToColumn) {
    position = trackLeftPos;

    position -= itemSize * slideSteps;
    position = Math.max(position, -(track.scrollWidth - itemsList.offsetWidth));

    setItemsTrackLeftPos(position);
  } else {
    position = trackTopPos;

    position -= itemSize * slideSteps;
    position = Math.max(position, -(track.scrollHeight - itemsList.offsetHeight));
    setItemsTrackTopPos(position)
  }
}

const StudentsTabs = ({students, windowWidth, setLessons}) => {
  const itemsTrack = useRef(null);
  const itemsList = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const [itemsTrackLeftPos, setItemsTrackLeftPos] = useState(0)
  const [itemsTrackTopPos, setItemsTrackTopPos] = useState(0)
  const slideSteps = 2;
  const windowWidthTabsToColumn = 414;

  let isPrevButtonActive = true;
  let isNextButtonActive = true;
  let itemSize;


  if(itemsTrack.current) {

    itemsTrack.current.style.marginLeft = itemsTrackLeftPos + 'px';
    itemsTrack.current.style.marginTop = itemsTrackTopPos + 'px';

    if(windowWidth >= windowWidthTabsToColumn) {
      itemSize = parseInt(itemsTrack.current.scrollWidth) / students.length;
      
      itemsTrackLeftPos === 0 
        ? isPrevButtonActive = false
        : isPrevButtonActive = true

      itemsTrackLeftPos <= -(itemsTrack.current.scrollWidth - itemsList.current.offsetWidth)
        ? isNextButtonActive = false
        : isNextButtonActive = true
    } else {
      itemSize = parseInt(itemsTrack.current.scrollHeight) / students.length;
      
      itemsTrackTopPos === 0 
        ? isPrevButtonActive = false
        : isPrevButtonActive = true

      itemsTrackTopPos <= -(itemsTrack.current.scrollHeight - itemsList.current.offsetHeight)
        ? isNextButtonActive = false
        : isNextButtonActive = true
    }
  }

  useEffect(() => {
    if(windowWidth >= windowWidthTabsToColumn) setItemsTrackTopPos(0);
    else setItemsTrackLeftPos(0);

  }, [windowWidth])


  return(
    <div className="students__tabs tabs">
      <button 
        className={
          isPrevButtonActive
            ? "tabs__arrow tabs__arrow_prev"
            : "tabs__arrow tabs__arrow_prev tabs__arrow_disabled"
        }
        ref={prevButton}
        onClick={() => slideToPrevious(
            itemSize, itemsTrackLeftPos, setItemsTrackLeftPos, 
            itemsTrackTopPos, setItemsTrackTopPos, windowWidth,
            windowWidthTabsToColumn, slideSteps
        )}
      ></button>
      <div 
        className="tabs__list"
        ref={itemsList}
      >
        <div 
          className="tabs__track"
          ref={itemsTrack}
        >
        {
          students.map(student => (
            <StudentsItem
              itemId={student.id}
              name={student.name}
              setLessons={setLessons}
              key={student.id}
            />
          ))
        }
        </div>
      </div>
      <button 
        className={
          isNextButtonActive 
            ? "tabs__arrow tabs__arrow_next"
            : "tabs__arrow tabs__arrow_next tabs__arrow_disabled"
        }
        ref={nextButton}
        onClick={() => slideToNext(
          itemSize, itemsTrack.current, itemsTrackLeftPos,
          setItemsTrackLeftPos, itemsTrackTopPos, setItemsTrackTopPos,
          windowWidth, windowWidthTabsToColumn,slideSteps,
          itemsList.current
        )}
      ></button>
    </div>
  )
}

export default compose(
  WithWindowSizes,
)(StudentsTabs);