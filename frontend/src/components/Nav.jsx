import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Nav = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/news-menu-api/main');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
        <a href="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-4 text-uppercase text-primary">
            Biz<span className="text-white font-weight-normal">News</span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">
            {data.map((item, i) => (
              item.sub_menu ? (
                <div
                  className={`nav-item dropdown ${openDropdown === i ? 'show' : ''}`}
                  key={i}
                  onMouseEnter={() => toggleDropdown(i)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <a
                    href="#!"
                    className="nav-link dropdown-toggle"
                    role="button"
                  >
                    {item.title}
                  </a>
                  <div className={`dropdown-menu rounded-0 m-0 ${openDropdown === i ? 'show' : ''}`}>
                    {item.sub_menu.map((subItem, mi) => (
                      <a href={subItem.link || "#!"} className="dropdown-item" key={mi}>
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={item.link || "#!"} className="nav-item nav-link" key={i}>
                  {item.title}
                </a>
              )
            ))}
          </div>

          <div className="input-group ml-auto d-none d-lg-flex" style={{ width: "100%", maxWidth: "300px" }}>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Keyword"
            />
            <div className="input-group-append">
              <button className="input-group-text bg-primary text-dark border-0 px-3">
                <FontAwesomeIcon icon={faSearchengin} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
