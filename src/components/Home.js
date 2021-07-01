import React from 'react'
import Header from './../components/Header';
import Main from './../components/Main';
import Background from './../components/Products/Background';
import Templates from './../components/Products/Templates';
import Estates from './../components/Products/Estates';
import Footer from './../components/Footer';
export default function Home(props) {
    return (
        <div>
            <Header />
            <Main register={props.register} />
            {/* <Background /> */}
            {/* <Templates />
            <Estates /> */}
            
            <Footer />
        </div>
    )
}
