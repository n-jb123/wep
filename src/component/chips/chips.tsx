import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Chips({icons,label,color}:{icons:any,label:string,color:string}) {
  return (
      <Chip icon={icons} label={label} sx={{bgcolor:color , p:4 , color:'secondary.contrastText',fontSize:'18px',fontWeight:'600',transition:'all 0.5s','&:hover':{cursor:'pointer',scale:1.05}}}/>
  );
}