import { FC } from "react"
import Image from "next/image"
import { Box, Button, Rating, Stack, Typography } from "@mui/material"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

interface DoctorsCardProps {
  avatar: string
  name: string
  role: string
}

export const DoctorsCard:FC<DoctorsCardProps> = ({ avatar, name, role }) => {
  
  return (
    <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1, maxWidth: 340 }}>
      <Box sx={{ mb: 1, borderRadius: 1 }}>
        <Image 
          src={avatar} 
          width={340}
          height={226} 
          alt="doctor"
        />
      </Box>
        
      <Box>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          {name}
          <CheckCircleRoundedIcon fontSize="small" sx={{ mx: 0.5, color: 'green' }} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Rating defaultValue={4} size="small" /> 
      </Box>

      <Stack spacing={0.5} sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnRoundedIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          Florida, USA
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeRoundedIcon sx={{ fontSize: 14 , color: 'text.secondary'}} />
          Availabel on Fri, 22 Mar 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocalAtmRoundedIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          $150- $250
        </Typography>
      </Stack>

      <Box>
        <Button size="small">View Profile</Button>  
        <Button size="small">Book Now</Button>
      </Box>
    </Box>
  )
}