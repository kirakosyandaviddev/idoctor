import { FC } from "react"
import Image from "next/image"
import { Box, Button, Rating, Stack, Typography } from "@mui/material"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

interface BlogsCardProps {
  image: string
  date: string
  info: string
  avatar: string
  name: string
  title: string
}

export const BlogsCard:FC<BlogsCardProps> = ({image, date, info, avatar, name, title }) => {
  
  return (
    <Box sx={{ px: 2 }}>
      <Box sx={{ p: 2, backgroundColor: 'white', border: 1, borderRadius: 1, borderColor: 'grey.300', maxWidth: 340 }}>
        <Box sx={{ mb: 1, borderRadius: 1 }}>
          <Image 
            src={image} 
            width={340}
            height={226} 
            alt="doctor"
            style={{ borderRadius: 1 }}
          />
        </Box>
          
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={1}>
            <Image 
              src={avatar} 
              width={28}
              height={28} 
              alt="doctor"
              style={{ borderRadius: '100%' }}
            />
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              {name}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </Box>

        <Stack spacing={1}>
          <Typography fontSize={18}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </Stack>
      </Box>
    </Box>
    
  )
}