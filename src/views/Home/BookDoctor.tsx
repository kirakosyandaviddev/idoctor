import { Box, Button, Typography } from "@mui/material"
import { DoctorsCard } from "../../components/DoctorsCard"
import { DoctorsCarousel } from "../../components/DoctorsCarousel"
import { DOCTOR_CARD_DETAILS } from "./constants"

export const BookDoctor = () => {
  return (
    <Box sx={{ py: 10, px: 4, backgroundColor: 'grey.200' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ maxWidth: '30%',  px: 2 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Book Our Doctor
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Lorem Ipsum is simply dummy text
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
          </Typography>
          <Button>
            Read More..
          </Button>
        </Box>

        <Box sx={{ px: 2 }}>
          <DoctorsCarousel>
          {DOCTOR_CARD_DETAILS.map((detail) => (
             <DoctorsCard key={detail.id} avatar={detail.avatar} name={detail.name} role={detail.role} />
          ))}
          </DoctorsCarousel>
        </Box>
      </Box>
    </Box>
  )
}