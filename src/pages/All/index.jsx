import React from "react";
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
            <input type="checkbox" style={{ margin: "0 20px" }} />
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;
