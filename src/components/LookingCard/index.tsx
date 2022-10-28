import { FC } from "react"
import { Box, Button, Stack, Typography } from "@mui/material"

interface LookingCardProps {
  background: string
  title: string
  button: string
}

export const LookingCard:FC<LookingCardProps> = ({ background, title, button }) => {
  return (
    <Box sx={{ px: 2 }}>
      <Box sx={{ position: 'relative', p: 4, backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: 400, minHeight: 300, borderRadius: 1 }}>
        <Stack spacing={2} sx={{ position: 'absolute', top: '35%', right: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>
            {title}
          </Typography>
          <Button sx={{ backgroundColor: 'primary.light', color: 'white', }}>
            {button}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}