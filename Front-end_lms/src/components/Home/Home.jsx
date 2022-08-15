import { Nabvar } from "../Navbar/Navbar";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <Nabvar />
      <div className="today">
        <div>
          <p>Today's Schedule</p>
        </div>
        <div>
          <button>BOOKMARKS</button>
          <button>REFER & EARN</button>
        </div>
      </div>
      <div className="today-content">
            <div className="box">
                <h3>9:00 AM</h3>
                <h3>SCRUM</h3>

            </div>
            <div className="details">
                <p>Scrum 13.08.2022</p>
                <p> <span>Nrupul</span> Starting at <span>9:00 AM</span></p>
                <button>live</button>
            </div>
            <p>Details</p>
      </div>
      <div className="today-content">
            <div className="box">
                <h3>9:00 AM</h3>
                <h3>SCRUM</h3>

            </div>
            <div className="details">
                <p>Scrum 12.08.2022</p>
                <p> <span>Nrupul</span> Starting at <span>9:00 AM</span></p>
                <button>live</button>
            </div>
            <p>Details</p>
      </div>
      <div className="today-content">
            <div className="box">
                <h3>9:00 AM</h3>
                <h3>SCRUM</h3>

            </div>
            <div className="details">
                <p>Scrum 11.08.2022</p>
                <p> <span>Nrupul</span> Starting at <span>9:00 AM</span></p>
                <button>live</button>
            </div>
            <p>Details</p>
      </div>
      <div className="today-content">
            <div className="box">
                <h3>9:00 AM</h3>
                <h3>SCRUM</h3>

            </div>
            <div className="details">
                <p>Scrum 10.08.2022</p>
                <p> <span>Nrupul</span> Starting at <span>9:00 AM</span></p>
                <button>live</button>
            </div>
            <p>Details</p>
      </div>

    </div>
  );
};
