import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={Alexa}
                description="Alexa was created by Amazon and is used in their Echo smart speakers."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={Cortana}
                description="Cortana was created by Microsoft and is used in their Windows operating system."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={Siri}
                description="Siri was created by Apple and is used in their iOS operating system."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
