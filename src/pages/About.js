import { React, useState } from "react";
import pic1 from "../assets/tom_avatar.jpg";
import { Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { galleries } from "../GalleryData";
import GalleryList from "./GalleryList";

const About = () => {
  const [showWebGalleries, setShowWebGalleries] = useState(false);

  return (
    <div className="about-container p-4">
      <Card>
        <Card.Header className="text-center">
          <Image roundedCircle src={pic1}></Image>
        </Card.Header>
        <Card.Body>
          <h3 className="text-center py-2">About</h3>
          <Card.Text className="py-2 about-text">
            Hi, I’m Tom, a Commercial Photographer from Columbus, Ohio, and I
            create images of real people in their business environments for
            advertising, corporate and editorial uses. For three decades, my
            creative problem-solving skills and ability to work in concert with
            a team, have led clients to say, I am a great value, worth my weight
            in a crunch and always welcome on their team. Corporate designers,
            Communications Directors and Marketing teams value my ability to
            convey their message in a visually significant and sensitive manor
            utilizing existing locations and materials. Bringing a project to
            successful completion on budget requires expertise in lighting,
            color management, file processing, editing, retouching and the right
            equipment. Add to that a full understanding of the project from pre
            to post-production. Photoshop is a joy, from simple retouching to
            extensive image manipulation and complex compositing, even adding or
            removing an individual in a group photo.
          </Card.Text>
          <hr></hr>
          <Card.Text className="py-2 about-text">
            As an Adjunct Professor of Photography, a lecturer and ASMP board
            member, I mentor students and clients about the value of great
            images. My education from the University of Wisconsin in painting
            and The Ohio State University in photography help define my visual
            language as a storyteller and compelling portraitist. The goal
            always to visually declutter scenes and evoke the mood of the
            client’s message with styles tailored to each project. Whether the
            production takes place in a school, hospital, factory, manufacturing
            plant, restaurant, assisted living facility, someone’s home or on a
            farm, I strategically include the environment as an essential
            character in the visual story.
          </Card.Text>
          <hr></hr>
          <Card.Text className="py-2 about-text">
            It can be very uncomfortable for people or employees to be in front
            of a camera, especially when it falls under the category of “duties
            other”. Most people hate having their picture taken. I get it; being
            respectful and sensitive to this, I use a lighthearted easy-going
            manner to build rapport and put subjects at ease. As for executives,
            I work with tight schedules yet understand the importance and
            gravity of capturing corporate history. My team and I work
            efficiently while exercising safety protocols. I love to collaborate
            in person, though I’m comfortable with tethered capture and
            live-sharing my screen via zoom for client approval. If you want….
            Peace of mind – to know the photography will be done right To build
            a professional relationship that looks out for your best interests
            To preserve and protect your corporate legacy Images that serve the
            corporate brand mission …. then I look forward to hearing from and
            working with you.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
