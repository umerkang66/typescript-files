// CodeCell component will communicate back and forth between CodeEditor and Preview Window
import { FC, useEffect, useState } from 'react';

// Components
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';

// State
import { CellInterface } from '../state';
import { useActions } from '../hooks/use-actions';

// Code Bundler
import bundler from '../bundler';

interface CodeCellProps {
  cell: CellInterface;
}

const CodeCell: FC<CodeCellProps> = ({ cell }) => {
  const [err, setErr] = useState('');
  const [code, setCode] = useState('');
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(() => {
      const bundleCode = async () => {
        const output = await bundler(cell.content);
        setCode(output.code);
        setErr(output.err);
      };

      bundleCode();
    }, 1000);

    // This will be called automatically next time when useEffect is called
    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  // I want to make resizable the entire code cell, and only vertical direction
  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          {/* This is for horizontal resizing */}
          <CodeEditor
            initialValue={cell.content}
            onChange={value => updateCell(cell.id, value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
