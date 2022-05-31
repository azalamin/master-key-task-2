import React from 'react';
import Services from '../components/Header/Services';
import Choose from './Choose';
import Create from './Create';

const Home = () => {
    return (
        <div>
            <Services />
            <Choose />
            <Create />
        </div>
    );
};

export default Home;