import React from 'react';
import Title from '../components/shared/Title';

const Home: React.FC = () => {
    return (
        <section>
            <Title title="Amazon - Home"/>
            <div>
                <img
                    style={{ width: "100%" }}
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="home background image"
                />
            </div>
            <div className="products">
                {
                    //TODO: Loading and MessageBox
                    // state.loading ? (<Loading/>):
                    // state.error ? (<MessageBox variant="danger">{state.error}</MessageBox>):
                    // (<div>products here</div>)
                }
            </div>
        </section>
    )
}

export default Home