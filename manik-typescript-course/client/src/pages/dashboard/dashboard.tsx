import React from 'react';

import { Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/sidebar';
import { TaskArea } from '../../components/taskArea/taskArea';

export const Dashboard: React.FC =
  (): React.ReactElement => {
    return (
      <Grid container minHeight="100vh" p={0} m={0}>
        <TaskArea />
        <Sidebar />
      </Grid>
    );
  };
