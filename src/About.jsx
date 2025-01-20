import "./About.css";
function About() {
  return (
    <div className="flowchart_container">
      <div>
        <script
          type="text/javascript"
          src="https://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=3WOAJysoBtl4lQGs5iK3mOtCosV7xw4FilfbZUE-pqqzTdclAsTNNxNplQCk6_V3HQytEQEaOF3ec3WejR3mR67_yKFBK3lKUzG7UknqQwUVNgfnJ43uAVCnvz21cohF4Yj3hYJeWZONNi290SDBEHYFUzfCfiMfNhDI3brEl7FQhjbX8xvwVVRfGZqt2Ls-o2VQ4YHZOO_jP69_8IBuw3rcBPYB6sdrVKQau0PB8YlQKCOxWYvF95h6pGeJNClOjqmlogsbS2KD7ibbwHqzPA"
        ></script>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://gc.kis.v2.scr.kaspersky-labs.com/E3E8934C-235A-4B0E-825A-35A08381A191/abn/main.css?attr=aHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvMTMyODYwODQ5NTY5OTc1OTExNC8xMzMwNDU3Njc1NzkxNzI4NjcwL2Zsb3cuaHRtbD9leD02NzhlMGNjNCZpcz02NzhjYmI0NCZobT03OTUwODExZDEyZjJlMzU5MzUyMjliMTg4MTA1NmM3Y2U4ZGYyMWM3OTViMzk0YzI3YzYzY2IxZTMzNjk0ZmZkJg"
        />
        <div className="title">
          <h1>How to utilize our service</h1>
        </div>
        <div className="timeline">
          <div className="checkpoint">
            <div>
              <h2>Select patient`s side effects</h2>
              <p>Choose the symptoms the patient`s experiencing due to current COC</p>
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>Choose current COC</h2>
              <p>
                Input the medication the patient`s currently taking, including
                name and dosage
              </p>
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>View results</h2>
              <p>The given result is a potentially appropriate substitute medication</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="disclaimer-about-page">
      *This website is a proof of concept for a hackathon and is not intended for medical use. The content and logic displayed on this page are purely fictional and for entertainment purposes only, and should not be construed as medical advice in any way. Always consult a licensed healthcare professional for medical decisions.
      </footer>
      <style></style>
    </div>
  );
}
export default About;
