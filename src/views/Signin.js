import React from 'react'
import { Component } from 'react';
import {
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Label,
    Input,
    Button, Card, CardHeader, CardBody, ButtonGroup
} from 'reactstrap';



class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validate: {
                emailState: '',
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    };

    validateEmail(e) {
        const emailRex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const { validate } = this.state;

        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success';
        } else {
            validate.emailState = 'has-danger';
        }

        this.setState({ validate });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`);
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="Signin">
                <Card className='p-4 col-7 m-auto '>
                    <CardHeader className='text-center'>
                        <h2>Sign In</h2>
                    </CardHeader>
                    <CardBody>
                        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="example@example.com"
                                    valid={this.state.validate.emailState === "has-success"}
                                    invalid={this.state.validate.emailState === "has-danger"}
                                    value={email}
                                    onChange={(e) => {
                                        this.validateEmail(e);
                                        this.handleChange(e);
                                    }}
                                />
                                <FormFeedback>
                                    Uh oh! Looks like there is an issue with your email. Please input
                                    a correct email.
                                </FormFeedback>
                                <FormFeedback valid>
                                    Looks Good
                                </FormFeedback>
                                <FormText>Your username is most likely your email.</FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <div className='m-auto text-center'>
                                <Button className='  btn-outline-primary w-75 m-auto '>Sign in</Button>
                            </div>
                        </Form>
                    </CardBody>

                </Card>
            </div>
        );
    }
}

export default Signin;