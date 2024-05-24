export default function AboutUsCard({ cssClassName, title, DESCRIPTION }) {
  return (
    <>
      <div className="column">
        <div className="card">
          <div className="container">
            <h2 className={cssClassName}>{title}</h2>
            <br />
            <div dangerouslySetInnerHTML={{__html: DESCRIPTION}}></div>
          </div>
        </div>
      </div>
    </>
  );
}
