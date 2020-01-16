import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Peleton',
        description: 'Simple and good',
        imageUrl: 'https://www.google.com/maps/place/Le+Peloton+Caf%C3%A9/@48.8554879,2.3560339,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPJRDrlRv3Kg7vAIJpFLYThZcA8Z_1gZ-_siNRl!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPJRDrlRv3Kg7vAIJpFLYThZcA8Z_1gZ-_siNRl%3Dw140-h186-k-no!7i3456!8i4608!4m5!3m4!1s0x47e671fd53cc60cb:0xab11467a194a20f5!8m2!3d48.8555316!4d2.3559334',
        address: '17 Rue du Pont Louis-Philippe, 75004 Paris, France',
        location: {
            lat: 48.8554879,
            lng: 2.3560339
        },
        creator: 'u977D'
    },
    {
        id: 'p2',
        title: 'Peleton',
        description: 'Simple and good',
        imageUrl: 'https://www.google.com/maps/place/Le+Peloton+Caf%C3%A9/@48.8554879,2.3560339,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPJRDrlRv3Kg7vAIJpFLYThZcA8Z_1gZ-_siNRl!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPJRDrlRv3Kg7vAIJpFLYThZcA8Z_1gZ-_siNRl%3Dw140-h186-k-no!7i3456!8i4608!4m5!3m4!1s0x47e671fd53cc60cb:0xab11467a194a20f5!8m2!3d48.8555316!4d2.3559334',
        address: '17 Rue du Pont Louis-Philippe, 75004 Paris, France',
        location: {
            lat: 48.8554879,
            lng: 2.3560339
        },
        creator: 'u977G'
    },

];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;