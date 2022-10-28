import { Box, Container, Stack, Typography } from "@mui/material"
import Image from "next/image"
import AvailabelFeaturesBanner from "../../../public/images/available-features-banner.jpg"
import { Carousel } from "../../components/Carousel"
import { AVAILABLE_FEATURES_DETAILS } from "./constants"

export const  AvailableFeatures = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center',px: 4, py: 10 }}>
      <Box sx={{ maxWidth: '30%',  px: 2 }}>
        <Image 
          src={AvailabelFeaturesBanner} 
          width={420}
          height={376} 
          alt="banner"
        />
      </Box>

      <Container>
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
            Availabel Features in Our Clinic
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', }}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </Typography>
        </Box>

        <Box>
          <Carousel>
            {AVAILABLE_FEATURES_DETAILS.map((detail) => (
              <Stack key={detail.id} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ backgroundColor: 'white', boxShadow: 1, borderRadius: 20, width: 120, height: 120, display: 'flex', alignItems: 'center' }}>
                  <Image src={`${detail.image}`} width={116} height={116} alt="image" style={{ borderRadius: 80 }}/> 
                </Box>
                <Typography sx={{ textAlign: 'center' }}>{detail.title}</Typography>
              </Stack>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  )
}