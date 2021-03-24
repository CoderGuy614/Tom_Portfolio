import { React, useState } from "react";
import pic1 from "../assets/tom_avatar.jpg";
import { Image, Card } from "react-bootstrap";

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
            creative problem-solving skills and ability to work with a team have
            put me in front of some truly incredible people: Corporate
            Designers, Communications Directors, and whole Marketing teams who
            have each said that I’m worth my weight, perfect in a crunch, and
            always welcome on their team. This is because of my ability to
            convey their message with visual panache and sensitive intuition.
          </Card.Text>
          <hr></hr>
          <strong>Passion Meets Professionalism</strong>
          <Card.Text className="py-2 about-text">
            Besides understanding the ins-and-outs of completing a project on
            time and on budget (through use of the right equipment, professional
            lighting, color management, file processing and editing), my ability
            to take a project completely from pre- to post-production is
            something I’ve refined over the years. I embrace Photoshop with joy,
            which means that—along with those skills I mentioned—I have the
            technical understanding to retouch your images from simple
            retouching to extensive image manipulation and complex compositing,
            even adding or removing an individual in a group photo. In fact, I
            hone my digital skills by teaching others the art of photography as
            an adjunct professor at Columbus State Community College and as an
            ASMP board member. My own education from the University of
            Wisconsin, in painting, and the Ohio State University, in
            photography, help define my visual approach as a storyteller and
            compelling portraitist.
          </Card.Text>
          <hr></hr>
          <strong>Location, Language and Lively Conversation</strong>
          <Card.Text className="py-2 about-text">
            One hallmark of my visual language is that I use the environment to
            aid in telling the story my clients want to convey. More than just
            headshots, including the location and the surroundings inherent to
            each project—be it a restaurant, retirement home, manufacturing
            facility, school or farm—brings a mood that is visceral and powerful
            to every picture I create. I understand how uncomfortable it can be
            to be in front of a camera—I’ve been there, myself. That’s why I
            pride myself on my easy manner while shooting—a lighthearted and
            easy-going rapport—that helps to put subjects at ease. And when
            working with executives (and the tight schedules they manage) I am
            efficient and professional in capturing their portraits and
            preserving corporate history. Plus, whether you want in-person
            collaboration, or tethered capture via video conferencing for remote
            approvals, I bring my professional best to every shooting session.
          </Card.Text>
          <hr></hr>
          <strong>I’m Ready When You Are</strong>
          <Card.Text className="py-2 about-text">
            So, if you’re looking for peace of mind—to know your photography is
            being done right; to gain a business relationship with a
            professional who looks out for your best interest; to preserve and
            protect your corporate legacy with images that serve the corporate
            brand mission—then I am ready to get to work.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
