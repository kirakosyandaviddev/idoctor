import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'teal', p: 4}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{ px: 4, color: 'white', maxWidth: 600,}}>
          <Link href="/">
            <a>
              <Image src="/images/logo_white.png" width={200} height={52} alt="logo"/>
            </a>
          </Link>
          <Typography sx={{ color: 'white'  }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eum nemo cupiditate dolore nam et non, optio tenetur, quam eius nesciunt odit, saepe modi ut obcaecati placeat quia dolorum! Eius!
          </Typography>
        </Box>

        <Box sx={{ px: 4, color: 'white' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            For Patients
          </Typography>
          <Link href="/"><a><Typography>Search for Doctors</Typography></a></Link>
          <Link href="/"><a><Typography>Login</Typography></a></Link>
          <Link href="/"><a><Typography>Register</Typography></a></Link>
          <Link href="/"><a><Typography>Booking</Typography></a></Link>
          <Link href="/"><a><Typography>Patient Dashboard</Typography></a></Link>
        </Box>

        <Box sx={{ px: 4, color: 'white' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            For Doctors
          </Typography>
          <Link href="/"><a><Typography>Appointments</Typography></a></Link>
          <Link href="/"><a><Typography>Chat</Typography></a></Link>
          <Link href="/"><a><Typography>Login</Typography></a></Link>
          <Link href="/"><a><Typography>Register</Typography></a></Link>
          <Link href="/"><a><Typography>Doctor Dashboard</Typography></a></Link>
        </Box>

        <Box sx={{ px: 4, color: 'white' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Link href="/"><a><Typography>3556 Beech Street, San Francisco,California, CA 94108</Typography></a></Link>
          <Link href="/"><a><Typography>+1 315 369 5943</Typography></a></Link>
          <Link href="/"><a><Typography>doccure@example.com</Typography></a></Link>
        </Box>
      </Box>
    </Box>
  )
}