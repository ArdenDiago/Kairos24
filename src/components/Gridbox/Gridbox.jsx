//it is the raw file which i copied from teachathon of gridboxjsx from hacjathon
export default function GridBox({ eventName, typeOfEvent, date, image, time }) {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="blog__item-right ">
          <div className="image d-block">
            <img className="radius-10" src={image} alt="image"></img>
            <h3>{eventName}</h3>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="details-container-left">
              <span className="blog__tag">{typeOfEvent}</span>
            </div>
            <div className="details-container-right">
              <span style={{display:'block'}}>{date}</span>
              <span>{time}</span>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }


//  below are the raw file which i got from events jsx
import GridBox from "../General/GridBox";
    import { eventDataList } from '../../Data/GeneralData';

export default function EventList() {
  return (
    <section className="blog pt-130 pb-130 event-list-margin">
      <div className="container">
        <div className="row  g-4 event-list-margin center-grid">
            {eventDataList.map((events) => (<GridBox key={events.key} {...events} />))}
        </div>
      </div>
    </section>
  );
}
