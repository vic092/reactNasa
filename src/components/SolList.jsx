import { useState, useEffect } from "react";
import axios from "axios";
import SingleSol from "./SingleSol";
import Loader from "./Loader";

export default function DayList() {
  const [soles, setSoles] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getData() {
    const res = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&api_key=yQqdkQNK6UZHhNLSm7dTtotQD5CUMapbJBUdRLfy"
    );
    setSoles(res.data.photos);
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
            <h1>Mars Images per Sol</h1>
            {soles.map((s, i) => {
              return (
                <div className="col-md-6 my-2" key={i}>
                  <SingleSol soles={s}></SingleSol>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
