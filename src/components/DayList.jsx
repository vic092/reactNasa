import { useState, useEffect } from "react";
import axios from "axios";
import SingleDay from "./SingleDay";
import Loader from "./Loader";

export default function DayList() {
  const [cosmos, setCosmos] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getData() {
    const res = await axios.get(
      "https://api.nasa.gov/planetary/apod?count=50&api_key=yQqdkQNK6UZHhNLSm7dTtotQD5CUMapbJBUdRLfy"
    );
    setCosmos(res.data);
    setLoading(false);
  }
  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="container text-white mt-4">
          <div className="row">
            <h1>Date's Nasa Images</h1>
            {cosmos.map((c, i) => {
              return (
                <div className="col-md-6 my-2" key={i}>
                  <SingleDay cosmos={c}></SingleDay>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
