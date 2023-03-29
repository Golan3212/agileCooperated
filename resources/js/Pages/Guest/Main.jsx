import {Link, Head, usePage} from '@inertiajs/react';
import Layout from '@/Pages/Layout';
import GuestLayout from "../../Layouts/GuestLayout";
import React from 'react';
import SimpleSlider from '../../components/SimpleSlider';
export default function Main() {
    return (
        <>
            <Head title="Main" />

                <SimpleSlider></SimpleSlider>
        </>
    );
}
