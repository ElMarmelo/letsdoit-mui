import * as React from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import ListContainer from './ListContainer';

const TodoContainer = () => {
    return (
        <>
            <CssBaseline/>
            <Container maxWidth="xl" sx={{my: 3}}>
                <Box>
                    <Typography variant='h4' align='center'>
                        Hi there
                    </Typography>
                    <Typography variant='h5' align='center' sx={{textDecoration:"underline"}}>
                        What are we doing today?
                    </Typography>
                    <ListContainer/>
                </Box>
            </Container>
        </>
    );
}

export default TodoContainer;
