import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/tom_avatar.jpg";
import { Card, Image, Row, Col } from "react-bootstrap";
import { Phone, Envelope, Geo } from "react-bootstrap-icons";

const Contact = () => {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.4499534831243!2d-83.04428914831193!3d39.9760489793179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388fac99ce6517%3A0x76bb124dfb4c633b!2s1423%20Goodale%20Blvd%2C%20Columbus%2C%20OH%2043212!5e0!3m2!1sen!2sus!4v1616541386922!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

  return (
    <div className="contact-container p-4">
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="h-100">
            <Card.Header className="text-center">Contact</Card.Header>
            <Card.Body>
              <Card.Text className="py-2 about-text">
                <Phone className="mr-2" />
                (614) 975 - 8976
              </Card.Text>
              <hr></hr>

              <Card.Text className="py-2 about-text">
                <Envelope className="mr-2" />
                <a href={"mailto:tom@tomdubanowich.com"}>
                  Tom@TomDubanowich.com
                </a>
              </Card.Text>
              <hr></hr>

              <Card.Text className="py-2 about-text">
                <Geo className="mr-2" />
                1423 Goodale Blvd. Columbus, OH 43212
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            {/* <Card.Header className="text-center">Contact</Card.Header> */}
            <Card.Body>
              <Iframe iframe={iframe} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
