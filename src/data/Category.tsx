import ForestIcon from '@mui/icons-material/Forest';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WavesIcon from '@mui/icons-material/Waves';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
export const Category=[
    {
        id:0,
        title:'جبال وقمم',
        icon:<FilterHdrIcon/>,
        color:'outline.main',
        AvailableTrips:'28 رحلة'
    },
     {
        id:1,
        title:'بحار وجزر',
        icon:<WavesIcon/>,
        color:'info.main',
        AvailableTrips:'14 رحلة'
    },
    {
        id:2,
        title:'وديان وأخاديد',
        icon:<WaterDropOutlinedIcon/>,
        color:'warning.main',
        AvailableTrips:'19 رحلة'
    },
    {
        id:3,
        title:'غابات ومحميات',
        icon:<ForestIcon/>,
        color:'primary.light',
        AvailableTrips:'9 رحلات'
    },
    {
        id:4,
        title:'صحاري وكثبان',
        icon:<WbSunnyOutlinedIcon/>,
        color:'secondary.light',
        AvailableTrips:'12 رحلة'
    },
    {
        id:5,
        title:'كهوف ومغاور',
        icon:<WorkspacesIcon/>,
        color:'background.default',
        AvailableTrips:'6 رحلات '
    },
]