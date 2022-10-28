import { Box, Container, Stack, Typography } from "@mui/material"
import Image from "next/image"
import { Carousel } from "../../components/Carousel"

export const ClinicAndSpecilatiesDetails = [
  {
    id: 1,
    title: 'Urology',
    icon: './images/urology.jpg',
  },
  {
    id: 2,
    title: 'Dentist',
    icon: './images/dentist.jpg',
  },
  {
    id: 3,
    title: 'Cardiologist',
    icon: './images/cardiologist.jpg',
  },
  {
    id: 4,
    title: 'Orthopedic',
    icon: './images/orthopedic.jpg',
  },
  {
    id: 5,
    title: 'Neurology',
    icon: './images/neurology.jpg',
  },
  {
    id: 6,
    title: 'Dentist',
    icon: './images/dentist.jpg',
  },
  {
    id: 7,
    title: 'Urology',
    icon: './images/urology.jpg',
  },
  {
    id: 8,
    title: 'Orthopedic',
    icon: './images/orthopedic.jpg',
  }

]

export const ClinicAndSpecilaties = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
          Clinic and Specialities
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>

      <Box>
        <Carousel>
          {ClinicAndSpecilatiesDetails.map((detail) => (
            <Stack key={detail.id} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ backgroundColor: 'white', boxShadow: 1, p: 2, borderRadius: 20, width: 120, height: 120, display: 'flex', alignItems: 'center' }}>
                <Image src={`/${detail.icon}`} width={60} height={60} alt="icon"/> 
              </Box>
              <Typography sx={{ textAlign: 'center' }}>{detail.title}</Typography>
            </Stack>
          ))}
        </Carousel>
      </Box>
    </Container>
  )
}