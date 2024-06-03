import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { Typography, Toolbar, Box, List, ListItem, ListItemAvatar, ListItemText, TextField, Button} from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
}
  
const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const textField = (
    <Grid container spacing={2}>
    {['Full Name', 
    'Email Address', 
    'Phone Number',
    'Choosse a Country', 
    'State/Region',    
    'City',
    'Address',
    'Zip/Code',
    'Company',
    'Role'
    ].map((text, index) => (
        <Grid xs={6}>
            <TextField 
                sx={{width:"100%"}} 
                key={index}
                id={text} 
                label={text} 
                type="search" />
        </Grid>
    ))}
   </Grid>
);

const BlankContent = (drawerWidth) => {
    // const [secondary, setSecondary] = React.useState(false);
  return (
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
        <Toolbar />
        <Grid xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
        
        {/* formularios */}
        <Box flex={1} alignItems={'center'}>
            {textField}
            <Button variant="contained">Contained</Button>
        </Box>
        {/* formularios */}
    </Box>
  )
}

export default BlankContent