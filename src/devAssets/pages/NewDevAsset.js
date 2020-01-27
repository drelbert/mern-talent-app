import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, 
         VALIDATOR_MINLENGTH 
        } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'
import './NewDevAsset.css';

const NewDevAsset = () => {
    const [formState, inputHandler] = useForm(
           {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            addedBy: {
                value: '',
                isValid: false
            }
           }, false
       );
   
   const devAssetSubmitHandler = event => {
       event.preventDefault();
       console.log(formState.inputs);
   };

    return (
    <form className="dev-form" onSubmit={devAssetSubmitHandler}>
        <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title.'
            onInput={inputHandler}
             />
        <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(3)]}
            errorText='Please enter a valid description.'
            onInput={inputHandler}
             />
        <Input
            id="addedBy"
            element="textarea"
            label="Added By"
            validators={[VALIDATOR_MINLENGTH(3)]}
            errorText='Please enter your name.'
            onInput={inputHandler}
             />
        <Button type="submit" disabled={!formState.isValid}>
            ADD DEV ASSET
        </Button>
    </form>
    );
};

export default NewDevAsset;