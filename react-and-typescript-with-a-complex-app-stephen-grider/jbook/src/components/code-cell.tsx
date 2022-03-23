// CodeCell component will communicate back and forth between CodeEditor and Preview Window
import { useEffect, useState } from 'react';

// Components
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';

// Code Bundler
import bundler from '../bundler';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [err, setErr] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const bundleCode = async () => {
        const output = await bundler(input);
        setCode(output.code);
        setErr(output.err);
      };

      bundleCode();
    }, 1000);

    // This will be called automatically next time when useEffect is called
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // I want to make resizable the entire code cell, and only vertical direction
  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          {/* This is for horizontal resizing */}
          <CodeEditor initialValue="" onChange={value => setInput(value)} />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
