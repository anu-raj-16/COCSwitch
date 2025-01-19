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
      <div className="content" style={{ textAlign: "left" }}>
        <div className="info">
          <h2>
            <em>
              COC.switch: Empowering Pharmacists, Improving Women's Health
            </em>
          </h2>
          <p>
            At COC.switch, we understand that every woman’s health journey is
            unique, <br />
            and finding the right birth control option shouldn’t be a challenge.
            Too often,
            <br />
            pharmacists face the daunting task of helping patients navigate the
            maze of <br />
            medications and symptoms, all while dealing with time constraints.
            <br />
            This is where we step in.
            <br />
            <br />
            Our innovative tool is designed to support pharmacists in quickly
            and accurately <br />
            finding the best birth control alternatives for their patients. By
            analyzing symptoms <br />
            and medications, COC.switch delivers recommendations that are
            tailored to the individual,
            <br />
            empowering pharmacists to provide better care and women to
            experience fewer side effects.
            <br />
            <br />
            With COC.switch, we’re not just streamlining a process, we’re
            enhancing lives.
            <br />
            We believe that personalized, efficient healthcare should be
            accessible to everyone,
            <br />
            and we’re committed to helping pharmacists provide the care that
            every woman deserves.
          </p>
        </div>
      </div>
      <div className="img"></div>
    </div>
  );
}

export default Home;
