import path from 'path';
import { Command } from 'commander';
import { serve } from '@js-note-umer/local-api';

const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
  // We want to watch for user running the serve command, [filename] means that there can be an optional value, [] means optional value, <> means required value
  .command('serve [filename]')
  .description('Open a file for editing')
  // Third argument is default value
  .option('-p, --port <number>', 'port to run server on', '4005')
  // Action will run when user will run jbook serve
  // We are going to receive the options as arguments in this action callback function
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    try {
      // process.cwd() will return from what directory user has ran the command from
      // path.dirname() will return the directory name of file, if user provide just file, it will be empty
      const dir = path.join(process.cwd(), path.dirname(filename));
      // path.basename() will give us just filename, even if users provide a nested filename ("dist/build/book.js", here this will only return book.js)

      const { port } = options;
      await serve(+port, path.basename(filename), dir, !isProduction);
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${port} to edit the file`
      );
    } catch (err: any) {
      if (err.code === 'EADDRINUSE') {
        console.log('Port is in use. Try running on a different port');
      } else {
        console.log('Here is the problem', err.message);
      }

      // Forcefully exit the program
      process.exit(1);
    }
  });
