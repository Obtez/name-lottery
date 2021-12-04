import React from 'react';
import NameListItem from '../name-list-item/NameListItem';
import { IName } from '../../types/types';
import styles from './NameList.module.scss';

interface IProps {
  names: IName[];
  deleteName: (id: string) => void;
}

const NameList = function ({ names, deleteName }: IProps) {
  return (
    <div className={styles.nameList}>
      <h2>Names</h2>
      <ul>
        {names.length > 0 ? (
          names.map((n: IName) => <NameListItem key={n.name} name={n} deleteName={deleteName} />)
        ) : (
          <p>No names added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default NameList;
