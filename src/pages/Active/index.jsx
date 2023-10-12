import { Button, Input } from "antd";
import { useState } from "react";

const Active = () => {
  const storageGoin = JSON.parse(localStorage.getItem("goins"));

  const [goin, setGoin] = useState("");
  const [goins, setGoins] = useState(storageGoin ?? []);

  const handleSubmit = () => {
    setGoins((prev) => {
      const newGoins = [...prev, goin];

      const jsonGoins = JSON.stringify(newGoins);
      localStorage.setItem("goins", jsonGoins);
      return newGoins;
    });
    setGoin("");
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
          value={goin}
          onChange={(e) => setGoin(e.target.value)}
        />
        <Button
          style={{ padding: "5px", background: "blue", color: "white" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>
      <br />
      <ul>
        {goins.map((goin, index) => (
          <li key={index} style={{ margin: "20px 0" }}>
            <input type="checkbox" style={{ margin: "0 20px" }} />
            {goin}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Active;
