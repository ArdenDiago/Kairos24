export default function Event({ category, eventID, handleChange }) {
  return (
    <>
      <div className="box">
        <h3 className="eventHeadings">{category}</h3>
        <section className="evec">
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
                <label htmlFor={item}>
                  {item.replace(/_/g, " ").toUpperCase()}
                </label>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}