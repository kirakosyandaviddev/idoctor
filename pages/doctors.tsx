import { FC } from "react"
import Layout from "../src/layout/Layout"
import { Doctors } from "../src/views/Doctors"

const DoctorsPage: FC = () => {
    return (
        <Layout>
            <Doctors />
        </Layout>
    )
}

export default DoctorsPage