import clgLogo from "../../../assets/img/ClgLogo/College logo.png";
import deptLogo from "../../../assets/img/ClgLogo/Department log.png";

export default function HeaderImages() {
  return (
    <header>
      <div>
        <div className="al-L">
          <img src={clgLogo} alt="" />
        </div>
        <div className="al-R">
          <img src={deptLogo} alt="" />
        </div>
      </div>
    </header>
  );
}
