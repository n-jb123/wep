import HikingIcon from '@mui/icons-material/Hiking';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';
import WarningIcon from '@mui/icons-material/Warning';
import DangerousIcon from '@mui/icons-material/Dangerous';
export const ChallengeLevel=[
    {
        id:0,
        level:'مغامرة عائلية وسهلة',
        color:'success.main',
        icon:<HikingIcon/>
    },
    {
        id:1,
        level:'متوسط - لياقة بدنية جيدة',
        color:'warning.main',
        icon:<NordicWalkingIcon/>
    },
    {
        id:2,
        level:'صعب ومتقدم',
        color:'secondary.dark',
        icon:<WarningIcon/>
    },
    {
        id:3,
        level:'إكستريم للمحترفين',
        color:'error.main',
        icon:<DangerousIcon/>
    },
]