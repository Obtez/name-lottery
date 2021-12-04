import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import NameListItem from '../name-list-item/NameListItem';
import { IName } from '../../types/types';
import styles from './NameList.module.scss';

interface IProps {
  names: IName[];
  deleteName: (id: string) => void;
}

function NameList({ names, deleteName }: IProps) {
  const [showNames, setShowNames] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setShowNames(!showNames);
    }
  };

  return (
    <div
      className={styles.nameList}
      onClick={() => setShowNames(!showNames)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {showNames ? <FiChevronDown /> : <FiChevronRight />}
      <h2>Names</h2>
      {showNames && (
        <ul>
          {names.length > 0 ? (
            names.map((n: IName) => <NameListItem key={n.name} name={n} deleteName={deleteName} />)
          ) : (
            <p>No names added yet.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default NameList;
