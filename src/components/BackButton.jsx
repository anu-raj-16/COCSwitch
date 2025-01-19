import { useNavigate } from "react-router-dom";
import "./Backbutton.css";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="back_button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
export default BackButton;
