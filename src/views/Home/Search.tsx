import { Box, Button, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export const Search = () => {
  return (
    <Box sx={{ backgroundImage: 'url(./images/home-banner.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 480 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 10, px: 4 }}>
        <Stack spacing={1} alignItems="center" marginBottom={4}>
          <Typography variant="h3">
            Search Doctor, Make an Appointment
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Discover the best doctors, clinic & hospital the city nearest to you.
          </Typography>
        </Stack>
        <Box sx={{ display: 'flex', gap: 4, width: '50%' }}>
          <TextField 
            id="outlined-search" 
            placeholder="Search Location" 
            type="search" 
            helperText="Based on your Location"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField 
            id="outlined-search" 
            placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" 
            helperText="Ex: Dental or Sugar Check up etc" 
            type="search" 
            sx={{ maxWidth: 480, width: '100%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }} 
          />
              
          <Box>
            <Button sx={{ backgroundColor: 'teal', px: 1, py: 2, ":hover": { backgroundColor: 'teal', opacity: '80%' } }}>
              <SearchRoundedIcon sx={{ color: 'white', }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}