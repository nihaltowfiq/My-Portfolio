import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ContactMe = () => {
    const history = useHistory();
    return (
        <Container >
            <section className="text-white text-center p-5">
                <p className="px-5">I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                <Button href="" onClick={() => history.push('/contact')} className="mt-4" variant="outline-success" size="lg" >Contact Me</Button>
            </section>
        </Container>
    );
};

export default ContactMe;