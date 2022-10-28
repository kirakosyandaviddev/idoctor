import { FC, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Button, Drawer, Hidden, Stack, Typography } from "@mui/material"
import { NAVS } from "./constants";

export const Header: FC = () => {

  const router = useRouter()
  const { pathname } = router
  const path = pathname.split('/')[1]

  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <Box sx={{ px: 4, py: 2, borderBottom: 1, borderBottomColor: 'grey.300', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Hidden mdDown>
        <Stack direction="row" spacing={6}>
          <Link href="/">
            <a>
              <Image src="/images/logo.png" width={200} height={52} alt="logo"/>
            </a>
          </Link>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
            {NAVS.map((nav) => (
              <Link key={nav.value} href={nav.route}>
                <a>
                  {nav.label}
                </a>
              </Link>
            ))}
          </Box>
        </Stack>
      </Hidden>

      <Hidden mdUp>
        <MenuRoundedIcon sx={{ color: 'primary.main' }} onClick={() => setIsOpened(true)} />
      </Hidden>
      <Drawer open={isOpened} onClose={() => setIsOpened(false)}>
        <Stack spacing={2} sx={{ backgroundColor: 'primary.main', height: '100%', px: 3, py: 6 }}>
          <Link href="/">
            <a>
              <Image src="/images/logo.png" width={200} height={52} alt="logo"/>
            </a>
          </Link>

          {NAVS.map((nav) => (
            <Link key={nav.value} href={nav.route}>
              <a>
                {nav.label}
              </a>
            </Link>
          ))}
        </Stack>
      </Drawer>

      <Box sx={{ display: 'flex',  }}>
        <Box sx={{ mr: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Contact
          </Typography>
          <Typography variant="body2">
            +1 854 624 8441
          </Typography>
        </Box>
        <Button sx={{ color: 'teal', backgroundColor: 'white', border: 2 , borderColor: 'teal', px: 2, py: 1, fontWeight: 700, ":hover": { color: 'white', backgroundColor: 'teal'} }}>
          LOGIN / SIGNUP
        </Button>
      </Box>
    </Box>
  )
}