import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { 
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH 
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

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

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);

    const placeId = useParams().placeId;


    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, 
    false
);

const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

useEffect(() => {
    setFormData({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, 
    true
    );
    setIsLoading(false);
}, [setFormData, identifiedPlace]);


const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find requested place.</h2>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input 
            id="title" 
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
            />
        <Input 
            id="description" 
            element="input"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            />
            <Button 
                type="submit"
                disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
    </form> 
  );
};

export default UpdatePlace;