import React from "react";

export default function SingleDay({ cosmos }) {
  return (
    <div className="card h-100 bg-dark" >
      <div className="overflow">
        <img src={cosmos.url} alt={cosmos.title} className="img-fluid card-img-top" />
      </div>
      <div className="card-body">
      <h3 className="text-primary">{cosmos.title}</h3>
      <p>{cosmos.explanation}</p>
      <p className="text-muted">{cosmos.date}</p>
      </div>
    </div>
  );
}
