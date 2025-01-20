import "./Home.css";

function Home() {
  return (
    <div>
      <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <div className="content">
        <div className="top_content">
          <h1 className="project_title">Plan A</h1>
          <h2 className="header_home">
            <em>Empowering Clinicians, Improving Women's Health</em>
          </h2>
        </div>
        <div className="info">
          <p>
            At Plan A, we understand that every woman’s health journey is
            unique, and finding the right birth control option shouldn’t be a
            challenge. Too often, clinicians face the daunting task of helping
            patients navigate the maze of medications and symptoms, all while
            dealing with time constraints.{" "}
          </p>
          <p>This is where we step in.</p>
          <p>
            Our innovative tool is designed to support clinicians in finding the
            best birth control alternatives for their patients quickly and
            accurately. By analyzing symptoms and current medications, Plan A
            delivers recommendations that are tailored to the individual,
            empowering clinicians to provide better care and enabling women to
            experience fewer side effects. With Plan A, we’re not just
            streamlining a process, we’re enhancing lives. We believe that
            personalized, timely healthcare should be accessible to everyone,
            and we’re committed to helping clinicians provide the care that
            every woman deserves.
          </p>
        </div>
      </div>
      <div className="img"></div>
      <footer className="disclaimer-main-page">
      *This website is a proof of concept for a hackathon and is not intended for medical use. The content and logic displayed on this page are purely fictional and for entertainment purposes only, and should not be construed as medical advice in any way. Always consult a licensed healthcare professional for medical decisions.
      </footer>
    </div>
  );
}

export default Home;
