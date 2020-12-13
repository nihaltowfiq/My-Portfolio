import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ContactMe = () => {
  const history = useHistory();
  return (
    <Container>
      <section className="text-white text-center p-5">
        <p className="px-md-5">
          I am interested in working with any company that thinks my skill will
          be helpful for them. If you are looking for someone like me, please
          let me know. Or you can just 'say hi' to me.
        </p>
        <button
          onClick={() => history.push("/contact")}
          className="mt-4 btn btn-lg btnOutlinedPurple"
        >
          Contact Me
        </button>
      </section>
    </Container>
  );
};

export default ContactMe;
