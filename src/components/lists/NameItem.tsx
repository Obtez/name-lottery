import React from 'react';
import { IName } from '../../types/types';

interface IProps {
  person: IName;
}

function NameItem({ person }: IProps) {
  return (
    <li>
      <span>{person.name}</span>
    </li>
  );
}

export default NameItem;
