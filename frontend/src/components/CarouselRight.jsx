import React, { useEffect, useState } from "react";

const GridNewsSection = ({sliderRight}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
      setItems(sliderRight)
    }, [])

  return (
    <div className="row mx-0">
      {items.map((item, index) => (
        <div className="col-md-6 px-0" key={index}>
          <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
            <img
              className="img-fluid w-100 h-100"
              src={item.imgUrl}
              alt={`News ${index + 1}`}
              style={{ objectFit: "cover" }}
            />
            <div className="overlay">
              <div className="mb-2">
                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="#">
                  {item.category}
                </a>
                <a className="text-white" href="#">
                  <small>{item.date}</small>
                </a>
              </div>
              <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="#">
                {item.title}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridNewsSection;
