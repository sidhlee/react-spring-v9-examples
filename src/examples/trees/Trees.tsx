import React from 'react';
import Tree from './Tree';

type TreesProps = {};

const Trees = (props: TreesProps) => {
  return (
    <Tree>
      <Tree />
    </Tree>
  );
};

export default Trees;
