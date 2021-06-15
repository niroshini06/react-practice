import React, { useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
import XMLParser from "react-xml-parser";
import axios from "axios";
import Parser from "rss-parser";
import { useSelector, useDispatch } from "react-redux";

let parser = new Parser();

function News() {
  const history = useHistory();
  const [feed, setFeed] = useState({});
  const dispatch = useDispatch();

  const style = {
    width: "90%",
    margin: "5rem auto",
  };

  function handleHinduEnglish() {
    axios
      .get("https://www.thehindu.com/sport/feeder/default.rss")
      .then((res) => {
        let jsonData = new XMLParser().parseFromString(res.data);
        console.log(jsonData);
        setFeed(jsonData);
        dispatch({ type: "SAVE_FEED", payload: jsonData });
        history.push("/news-detail/hindu");
      });
  }
  return (
    <div style={style}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/dashboard"> Dashboard </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>News</Breadcrumb.Item>
      </Breadcrumb>

      <Card
        onClick={handleHinduEnglish}
        title="Hindu"
        bordered={true}
        style={{ width: 300 }}
      >
        find Hindu news here
      </Card>
    </div>
  );
}

export default News;
