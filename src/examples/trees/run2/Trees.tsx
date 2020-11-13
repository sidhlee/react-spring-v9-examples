import React from 'react';

import Tree from './Tree';
import { StyledTrees } from './treesStyles';
type TreesProps = {};

const Trees = (props: TreesProps) => {
  return (
    <StyledTrees>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10em' }}
      >
        <Tree name="root" defaultOpen>
          <Tree name="subtree" />
          <Tree name="subtree with children">
            <Tree name="one" style={{ color: 'var(--accent)' }} />
            <Tree name="two" style={{ color: 'var(--accent)' }} />
            <Tree name="three" style={{ color: 'var(--accent)' }} />
          </Tree>
          <Tree name="custom content">
            <div
              style={{
                backgroundColor: 'var(--secondary)',
                height: '10em',
                width: '6em',
                borderRadius: 'var(--border-radius)',
              }}
            />
          </Tree>
          <Tree
            name={
              <span aria-label="green tea" role="img">
                🍵
              </span>
            }
          />
        </Tree>
      </div>
    </StyledTrees>
  );
};

export default Trees;
