import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/button";

const SearchBox: React.FC = () => {
    return (
        <Form>
            <InputGroup>
                <FormControl
                    aria-describedby="button-search"
                    type="text"
                    placeholder="Search for products"
                    name="q"
                    id="q"
                />
                <Button variant="outline-primary" type="submit" id="button-search">
                    <i className="fa fa-search"></i>
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBox