import React from 'react';
import Tree from './Tree';

type TreesProps = {};

const Trees = (props: TreesProps) => {
  return (
    <Tree name="A" defaultOpen>
      <Tree name="subtree" />
      <Tree name="sub-tree with children">
        <Tree name="C1" style={{ color: 'var(--accent)' }} />
        <Tree name="C2" style={{ color: 'var(--accent)' }} />
        <Tree name="C3" style={{ color: 'var(--accent)' }} />
      </Tree>
      <Tree name="custom content">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 200,
            padding: '1em',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--secondary)',
              borderRadius: 5,
            }}
          />
        </div>
      </Tree>
      <Tree
        name={
          <span role="img" aria-label="tea">
            🍵
          </span>
        }
      />
    </Tree>
  );
};

export default Trees;
