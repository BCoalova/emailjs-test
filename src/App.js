import React from 'react'
import emailjs from 'emailjs-com'
import { Form, Button, Container } from 'react-bootstrap'

const App = () => {
    const serviceId = process.env.REACT_APP_API_YOUR_SERVICE_ID
    const templateId = process.env.REACT_APP_API_YOUR_TEMPLATE_ID
    const userId = process.env.REACT_APP_API_YOUR_USER_ID

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(serviceId, templateId, e.target, userId).then(
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
            }
        )
        e.target.reset()
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="name" name="name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default App
