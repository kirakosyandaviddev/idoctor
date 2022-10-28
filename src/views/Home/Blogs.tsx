import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { color } from "@mui/system"
import Image from "next/image"
import { BlogsCard } from "../../components/BlogsCard"
import { Carousel } from "../../components/Carousel"
import { BLOGS_CARD_DETAILS } from "./constants"

export const BlogDetails = [
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

export const Blogs = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
            Blogs and News
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', mb: 4 }}>
        {BLOGS_CARD_DETAILS.map((detail) => (
          <BlogsCard key={detail.id} image={detail.iamge} avatar={detail.avatar} name={detail.name} title={detail.title} date={detail.date} info={detail.info} />
        ))}
      </Box>

      <Button sx={{ backgroundColor: 'teal', color: 'white', px: 4, py: 2, ":hover": {backgroundColor: 'teal', opacity: '80%'} }}>
        View All
      </Button>
    </Container>
  )
}