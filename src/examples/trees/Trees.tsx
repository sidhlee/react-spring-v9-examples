import React from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const Trees = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
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
                borderRadius: `var(--border-radius)`,
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
    </div>
  );
};

export default styled(Trees)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3em;
`;
