export default function AboutUsCard({ cssClassName, title, DESCRIPTION }) {
  return (
    <>
      <div className="column">
        <div className="card">
          <div className="container">
            <h3 className={cssClassName}>{title}</h3>
            <br />
            <div dangerouslySetInnerHTML={{__html: DESCRIPTION}}></div>
          </div>
        </div>
      </div>
    </>
  );
}
