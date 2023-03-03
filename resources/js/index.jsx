import '../css/App.scss';
import React from 'react';
import ReactDOM, {hydrateRoot} from "react-dom/client";
import {createInertiaApp, Head} from '@inertiajs/react'



createInertiaApp({
    resolve: name => {
        const Pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
        return Pages[`./Pages/${name}.jsx`]
    },
    setup({el, App, props}) {
        hydrateRoot(el, <App {...props} />)
    },
});

