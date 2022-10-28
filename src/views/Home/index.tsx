import { Box, Container } from "@mui/material"
import Image from "next/image"
import Banner from "../../../public/images/home-banner.jpg"
import { AvailableFeatures } from "./ AvailableFeatures"
import { Blogs } from "./Blogs"
import { BookDoctor } from "./BookDoctor"
import { ClinicAndSpecilaties } from "./ClinicAndSpecilaties"
import { Looking } from "./Looking"
import { Search } from "./Search"

export const Home = () => {
  return (
    <>
      <Search />
      <Looking />
      <ClinicAndSpecilaties />
      <BookDoctor />
      <AvailableFeatures />
      <Blogs />
    </>
  )
}