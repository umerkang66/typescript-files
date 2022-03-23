import 'bulmaswatch/superhero/bulmaswatch.min.css';
import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { fetchPlugin } from './plugins/fetch-plugin';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';

// Components
import CodeEditor from './components/code-editor';

const App = () => {
  const serviceRef = useRef<esbuild.Service | null>(null);
  const iFrameRef = useRef<HTMLIFrameElement | null>(null);
  const [input, setInput] = useState('');

  const startService = async () => {
    // Service is going to be used to bundle and transpile user's code
    const service = await esbuild.startService({
      worker: true,
      // Fetch the web assembly binary that is in the public directory
      // wasmURL: '/esbuild.wasm',
      // From the unpkg npm
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });

    serviceRef.current = service;
  };

  useEffect(() => {
    startService();
  }, []);

  const onCodeSubmit = async () => {
    if (!serviceRef.current) return;

    // Reset the iframe html content
    if (iFrameRef.current) iFrameRef.current.srcdoc = html;

    // Build will transpile and bundle the files (bundle means to put all js files into one file)
    const result = await serviceRef.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      // Pass the user's code in the plugin
      // Order matters here
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      // Define environment variable
      define: {
        // If there is process.env.NODE_ENV, replace it with "production" (string not variable)
        'process.env.NODE_ENV': '"production"',
        // If there is global, replace it with window (variable not string)
        global: 'window',
      },
    });

    if (iFrameRef.current && iFrameRef.current.contentWindow) {
      // Send the bundled and transpiled code to iFrame. This is actually emit the message Event on Window, that we have already handled in the srcDoc html script tag

      // This property will be present on event.data
      iFrameRef.current.contentWindow.postMessage(
        result.outputFiles[0].text,
        // * means allows all domains
        '*'
      );
    }
  };

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              // ERROR HANDLING

              // Show the error in #root div
              const root = document.getElementById('root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';

              // We can also rethrow an error, so it goes to the console, or we can console.error it
              // throw err;
              console.error(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

  return (
    <div>
      <CodeEditor initialValue="" onChange={value => setInput(value)} />
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        name="code-cell"
        id="code-cell"
        cols={30}
        rows={10}
      ></textarea>
      <div>
        <button onClick={onCodeSubmit}>Submit</button>
      </div>
      {/* pre element will nicely format the code */}
      {/* <pre>{code}</pre> */}
      <iframe
        ref={iFrameRef}
        title="code-preview"
        srcDoc={html}
        // Get access from parent to child is allowed
        // if sandbox="", it is not allowed
        // sandbox="allow-same-origin", here it is allowed
        sandbox="allow-scripts" // here only scripts that are provided through html (srcDoc) are allows
      ></iframe>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
