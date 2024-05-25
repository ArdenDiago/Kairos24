export default function Event({ category, eventID, handleChange }) {
  return (
    <>
      <div class="box">
        <h3 class="eventHeadings">{ category }</h3>

        <div className="question">
          {eventID.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={item}
                className="event-list"
                name={item}
                onChange={handleChange}
              />
              <label htmlFor={item}>{item}</label>{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
