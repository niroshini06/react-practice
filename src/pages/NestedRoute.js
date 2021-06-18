import React, { useState } from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Switch,
} from "react-router-dom";

const data = {
  class: "standard-5",
  stuCount: "60",
  topics: [
    {
      id: "English",
      description: "Learn English",
      resources: [
        {
          id: "eng-poem",
          description: "eng-poem description",
        },
        {
          id: "eng-grammer",
          description: "eng-grammer description",
        },
      ],
    },
    {
      id: "Tamil",
      description: "Learn Tamil ",
      resources: [
        {
          id: "tam-poem",
          description: "tam-poem description",
        },
        {
          id: "tam-grammer",
          description: "tam-grammer description",
        },
      ],
    },
  ],
};

function Resource() {
  let { topicId, resourceId } = useParams();
  let myResource = data.topics
    .find((t) => topicId === t.id)
    .resources.find((r) => resourceId === r.id);
  return (
    <div>
      <p>{myResource.id}</p>
      <p>{myResource.description}</p>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  const { path, url } = useRouteMatch();

  let myTopic = data.topics.find((e) => topicId === e.id);
  return (
    <div>
      <p>{myTopic.id}</p>
      <p>{myTopic.description}</p>
      {myTopic.resources.map((e) => (
        <li key={e.id}>
          <Link to={`${url}/${e.id}`}>{e.id}</Link>
        </li>
      ))}

      <Route path={`${path}/:resourceId`}>
        <Resource />
      </Route>
    </div>
  );
}
function NestedRoute() {
  // Note: dont add exact match to the routes that need to be nested
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div>
      <p>{data.class}</p>
      <p>{data.stuCount}</p>
      <p>
        {data.topics.map((e) => (
          <li key={e.id}>
            <Link to={`${url}/${e.id}`}>{e.description}</Link>
          </li>
        ))}
      </p>

      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </div>
  );
}

export default NestedRoute;
