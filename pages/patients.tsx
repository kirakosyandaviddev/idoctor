import { FC } from "react"
import Layout from "../src/layout/Layout"
import { Patients } from "../src/views/Patients"

const PatientsPage: FC = () => {
    return (
        <Layout>
            <Patients />
        </Layout>
    )
}

export default PatientsPage