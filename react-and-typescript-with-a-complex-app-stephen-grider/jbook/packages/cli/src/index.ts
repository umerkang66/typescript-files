#!/usr/bin/env node
import { program } from 'commander';
import { serveCommand } from './commands/serve';

// If we want to add multiple commands, we will just chain the addCommand method
program.addCommand(serveCommand);
program.parse(process.argv);
