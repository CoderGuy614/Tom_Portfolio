import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/tom_avatar.jpg";
import { Card, Image, Row, Col } from "react-bootstrap";
import { Phone, Envelope, Geo } from "react-bootstrap-icons";

const Contact = () => {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.4499534831243!2d-83.04428914831193!3d39.9760489793179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388fac99ce6517%3A0x76bb124dfb4c633b!2s1423%20Goodale%20Blvd%2C%20Columbus%2C%20OH%2043212!5e0!3m2!1sen!2sus!4v1616541386922!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
  const newIframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3544045232043!2d-83.12513368373585!3d40.40099897936708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838e258139eb8a9%3A0xb3cd9f0219b809c5!2s5878%20Hedley%20Rd%2C%20Radnor%2C%20OH%2043066!5e0!3m2!1sen!2sus!4v1659550003252!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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
                5878 Hedley Rd. Radnor, OH 43066
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            {/* <Card.Header className="text-center">Contact</Card.Header> */}
            <Card.Body>
              <Iframe iframe={newIframe} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
