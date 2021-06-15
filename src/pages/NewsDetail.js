import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";

function NewsDetail() {
  const style = {
    width: "90%",
    margin: "5rem auto",
  };

  const feed = useSelector((state) => state.feeds.feed);

  return (
    <div style={style}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/dashboard"> Dashboard </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/news"> News </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{feed.children[0].children[0].value}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default NewsDetail;
