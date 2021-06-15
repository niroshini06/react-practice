import React from "react";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Dashboard() {
  const style = {
    width: "90%",
    margin: "5rem auto",
  };
  return (
    <div style={style}>
      <Card
        title={<FontAwesomeIcon icon={faNewspaper} size={"lg"} />}
        bordered={true}
        style={{ width: 300 }}
      >
        <Link to="/news"> News </Link>
      </Card>
    </div>
  );
}

export default Dashboard;
