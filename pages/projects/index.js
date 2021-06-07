import Image from "next/image";

function ProjectsPage() {
  return (
    <main id="work">
      <h1 class="lg-heading">
        My
        <span class="text-secondary">Work</span>
      </h1>
      <h2 class="sm-heading">Check out some of my projects...</h2>
      <div class="projects">
        <div class="item">
          <a href="#!">
            <Image
              src="/images/projects/project_000.png"
              alt="Project"
              layout="intrinsic"
              width={500}
              height={300}
            />
          </a>
          <a href="#" class="btn-light">
            <i class="fas fa-eye"></i> Project
          </a>
          <a href="#" class="btn-dark">
            <i class="fab fa-github"></i> Github
          </a>
        </div>
        <div class="item">
          <a href="#!">
            <Image
              src="/images/projects/project_001.png"
              alt="Project"
              layout="intrinsic"
              width={500}
              height={300}
            />
          </a>
          <a href="#" class="btn-light">
            <i class="fas fa-eye"></i> Project
          </a>
          <a href="#" class="btn-dark">
            <i class="fab fa-github"></i> Github
          </a>
        </div>
        <div class="item">
          <a href="#!">
            <Image
              src="/images/projects/project_002.png"
              alt="Project"
              layout="intrinsic"
              width={500}
              height={300}
            />
          </a>
          <a href="#" class="btn-light">
            <i class="fas fa-eye"></i> Project
          </a>
          <a href="#" class="btn-dark">
            <i class="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
