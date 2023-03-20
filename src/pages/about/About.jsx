import React from 'react';
import Header from '../../components/Header';
import './about.css';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolorem illo ipsam atque eum id inventore quia ipsa numquam molestiae!
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Three girls in swimsuits" />
          </div>

          <div className="about_section-content">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio aspernatur iusto ipsam! Repellat nihil dolore possimus ullam consequuntur voluptatibus architecto nemo neque veritatis quam, ab reprehenderit officiis maiores obcaecati laboriosam exercitationem. Autem praesentium fugiat nihil ad. Perferendis, numquam necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum quidem ea magni odit excepturi reiciendis asperiores, cum repellat saepe iste quae sapiente libero, repellendus deserunt dolor soluta consectetur numquam. Dolorum, ipsam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi omnis enim nobis.
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit minus, facere dolorum tempore obcaecati ex minima, odio, sint vitae similique illum maxime blanditiis sunt nostrum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, neque unde consequuntur eos blanditiis, ratione quod explicabo illum temporibus consectetur eligendi veniam in quo consequatur nisi magni dicta vel labore nesciunt voluptas necessitatibus? Non quis rerum harum, asperiores soluta voluptatum!
            </p>
          </div>

          <div className="about_section-image">
            <img src={VisionImage} alt="Three smiling girls are standing at the wall" />
          </div>

        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Three girls aret alking to each other sitting on the floor" />
          </div>

          <div className="about_section-content">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio aspernatur iusto ipsam! Repellat nihil dolore possimus ullam consequuntur voluptatibus architecto nemo neque veritatis quam, ab reprehenderit officiis maiores obcaecati laboriosam exercitationem. Autem praesentium fugiat nihil ad. Perferendis, numquam necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum quidem ea magni odit excepturi reiciendis asperiores, cum repellat saepe iste quae sapiente libero, repellendus deserunt dolor soluta consectetur numquam. Dolorum, ipsam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi omnis enim nobis.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default About;