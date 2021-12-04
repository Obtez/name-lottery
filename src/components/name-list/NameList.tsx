import React from 'react';

interface IProps {
  names: string[];
}

const NameList = function ({ names }: IProps) {
  return <ul>{names.length > 0 ? names.map((n: string) => <p key={n}>{n}</p>) : <p>No names added yet.</p>}</ul>;
};

export default NameList;
