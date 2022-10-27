import React from "react";

export default function SingleSol({soles}) {
    //const s = soles.values()
  return (
    <div className="card h-100 bg-dark">
      <div className="o">
        <img
          src={soles.img_src}
          alt={soles.full_name}
          className="img-fluid card-img-top"
         
        />
      </div>
      <div className="card-body">
        <h5 className="text-primary">Camera: {soles.camera.full_name}</h5>
        <p className="text-white">{soles.rover.name}</p>
        <p className="text-muted">{soles.earth_date}</p>
      </div>
    </div>
  );
}
