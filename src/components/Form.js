import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';



class FormHorns extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        let submitData = event.target.selection.value;
        this.props.dataForm(submitData);
    }



    render() {
        return (
            <Form style={{marginBottom: '20px'}} onSubmit={this.handleSubmit}>
                <FloatingLabel controlId="floatingSelect" label="Select Number Of Horns">
                    <Form.Select name="selection" aria-label="Floating label select example">
                        <option value="All">ALL</option>
                        <option value="1">ONE</option>
                        <option value="2">TWO</option>
                        <option value="3">THREE</option>
                        <option value="100">WOW</option>
                    </Form.Select>
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default FormHorns



