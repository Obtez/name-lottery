import React from 'react';
import { IName } from '../../types/types';

interface IProps {
  person: IName;
}

function NameItem({ person }: IProps) {
  if (!person) return null;

  return (
    <li>
      <p>{person.name}</p>
    </li>
  );
}

export default NameItem;
