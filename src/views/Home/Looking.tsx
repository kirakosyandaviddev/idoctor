import { Box, Container, Typography } from "@mui/material"
import { LookingCard } from "../../components/LookingCard"

export const LookingCardDetails = [
  {
    id: 1,
    title: 'Visit a Doctor',
    backgroundImage: './images/doctors.jpg',
    button: 'Book Now'
  },
  {
    id: 2,
    title: 'Find a Pharmacy',
    backgroundImage: './images/pharmacy.jpg',
    button: 'Find Now'
  },
  {
    id: 3,
    title: 'Find a Lab',
    backgroundImage: './images/lab.jpg',
    button: 'Coming Soon'
  }
]

export const Looking = () => {
  return (
    <Box sx={{ backgroundColor: "grey.200"}}>
      <Container maxWidth="xl" sx={{ py: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          What are you looking for?
        </Typography>
        <Box sx={{ display: { md: 'flex' } }}>
          {LookingCardDetails.map((detail) => (
            <LookingCard key={detail.id} background={detail.backgroundImage} title={detail.title} button={detail.button} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}