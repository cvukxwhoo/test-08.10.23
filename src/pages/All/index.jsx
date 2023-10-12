import { useState } from "react";
import { Input, Button } from "antd";

const All = () => {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs ?? []);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  const handleCheck = (job) => {
    // Get Goins list
    let doingTasks = JSON.parse(localStorage.getItem("goins"));

    // Initial value for doingTask if doingTask == null
    if (!doingTasks) {
      doingTasks = [];
    }

    // Add new items from job --> doing task
    doingTasks.push(job);
    console.log("doingTasks", doingTasks);
    const jsonJobs = JSON.stringify(doingTasks);
    localStorage.setItem("goins", jsonJobs);

    // Minus 1 Jobs
    setJobs(() => {
      const newJobs = jobs.filter(function (content) {
        return content !== job;
      });

      console.log("newJobs", newJobs);

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "40",
        width: "fit-content",
        fontSize: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <Input
          style={{ margin: "0 10px 0" }}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <Button
          style={{ padding: "5px", background: "blue", color: "white" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>

      <ul>
        {jobs.map((job, index) => (
          <li key={index} style={{ margin: "20px 20px" }}>
            <input
              type="checkbox"
              style={{ margin: "0 20px" }}
              onChange={() => handleCheck(job)}
            />
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;
