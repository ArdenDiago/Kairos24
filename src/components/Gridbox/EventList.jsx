//  below are the raw file which i got from events jsx
import GridBox from "./Gridbox";

const eventDataList = [
    {
        eventName:'Coding', typeOfEvent:'Tec', date:'04/06/2024', image:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*5RlrOd0IV92gwEuWfVdmPQ.png', time:'10:00 AM' 
    }
]

export default function EventList() {
  return (
    <section className="blog pt-130 pb-130 event-list-margin">
      <div className="container">
        <div className="row  g-4 event-list-margin center-grid">
          {eventDataList.map((events) => (
            <GridBox key={events.key} {...events} />
          ))}
        </div>
      </div>
    </section>
  );
}
