import Image from "next/image";

function AboutPage() {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      <div className="about-info">
        <Image
          src="/images/ed33.jpg"
          alt="Mariusz Golik"
          className="bio-image"
          width={250}
          height={420}
          quality={100}
        />

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel
            ducimus nulla harum voluptatem eligendi! Unde, reiciendis?
            Praesentium, laborum.
          </p>
        </div>

        <div className="job job-1">
          <h3>123 Webshop</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perferendis totam enim. Nesciunt porro dolores expedita dolor
            necessitatibus deserunt nemo.
          </p>
        </div>

        <div className="job job-2">
          <h3>Designers ABC</h3>
          <h6>Front End Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perferendis totam enim. Nesciunt porro dolores expedita dolor
            necessitatibus deserunt nemo.
          </p>
        </div>

        <div className="job job-3">
          <h3>Webworks</h3>
          <h6>Graphic Designer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            perferendis totam enim. Nesciunt porro dolores expedita dolor
            necessitatibus deserunt nemo.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
