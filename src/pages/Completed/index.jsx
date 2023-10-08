import React from "react";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const Completed = () => {
  const storageDones = JSON.parse(localStorage.getItem("dones"));
  const [done, setDone] = useState("");
  const [dones, setDones] = useState(storageDones ?? []);

  const handleSubmit = () => {
    setDones((prev) => {
      const newDones = [...prev, done];
      const jsonDones = JSON.stringify(newDones);
      localStorage.setItem("dones", jsonDones);
      return newDones;
    });
    setDone("");
  };

  const handleDelete = (index) => {
    const newList = [...dones];
    newList.splice(index, 1);
    setDones(newList);
  };

  const handleDeleteAll = () => {
    setDones([]);
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
          value={done}
          onChange={(e) => setDone(e.target.value)}
        />
        <Button
          style={{ padding: "5px", background: "blue", color: "white" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>

      <ul>
        {dones.map((done, index) => (
          <li key={index} style={{ margin: "20px 0", display: "flex" }}>
            <Input type="checkbox" style={{ margin: "0 20px" }} />
            <p style={{ flex: "1" }}>{done}</p>
            <DeleteOutlined
              onClick={() => handleDelete(index)}
              style={{ margin: "0 20px", color: "red" }}
            />
          </li>
        ))}
        <br />
        <Button
          style={{ padding: "5px", background: "red", color: "white" }}
          onClick={handleDeleteAll}
        >
          Delete All
        </Button>
      </ul>
    </div>
  );
};

export default Completed;
