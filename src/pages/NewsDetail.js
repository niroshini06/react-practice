import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";

function NewsDetail() {
  const style = {
    width: "90%",
    margin: "5rem auto",
  };

  const feed = useSelector((state) => state.feeds.feed);
  const temp = [...feed.children[0].children];
  temp.splice(0, 5);

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

      <Row>
        {temp.map((e, i) => (
          <Col span={8} key={i}>
            <Card
              title={e.children[0].value}
              bordered={true}
              style={{ maxWidth: "90%" }}
            >
              <p>{e.children[4].value}</p>
              <p>{e.children[3].value}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default NewsDetail;
