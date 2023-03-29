
// import Authenticated from "./../../Layouts/AuthenticatedLayout";
// import { usePage } from '@inertiajs/react'
// const Test = ({ user }) => {
//
//     const { auth } = usePage().props
//     return (
//         <>
//             <H1>Welcome</H1>
//             <p>Hello {auth.user.name}, welcome to your first Inertia app!</p>
//         </>
//     )
// }
//
// Test.layout = page => <Layout children={page} title="Welcome" />
//
// export default Test


import { usePage } from '@inertiajs/react'

import GuestLayout from '../../Layouts/GuestLayout'

 import Layout from './../../Layouts/Layout'
import FooterList from "@/Components/FooterList";
export default function Test({ children  }) {
    const { auth } = usePage().props

    return (
     <Layout>


                You are logged in as: {auth.user.name}

            <main>

                {children}

            </main>


             <FooterList></FooterList>

     </Layout>

    )
}
