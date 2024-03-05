import { useNavigate } from "react-router-dom";

const Navigate1 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex p-4 gap-3">
      <button className="bg-slate-500"
        onClick={() => {
          navigate("/pupularcourse");
        }}
      >
        pupulare Course
      </button>
      <button className="bg-slate-500"
        onClick={() => {
          navigate("/topmentor");
        }}
      >
       Top Mentor
      </button>
      <button className="bg-slate-500"
        onClick={() => {
          navigate("/lessons");
        }}
      >
       Lessons
      </button>
    </div>
  );
};
export default Navigate1