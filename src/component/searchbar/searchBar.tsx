'use client'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Divider } from '../divider/divider';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={(theme)=>({ p:2, display: 'flex', alignItems: 'center', width:'100%',borderRadius:theme.shape.full ,bgcolor:'#fff'})}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 ,p:2}}
        placeholder="عن ماذا تبحث"
        inputProps={{ 'حقل الادخال': 'عن ماذا تبحث' }}
      />
      <Divider height={'38px'} width={'2px'}/>
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
