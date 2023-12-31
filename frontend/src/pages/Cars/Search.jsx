import React, { useState } from "react";
import { useReactContext } from "../../context/ContextProvider";

export default function Search() {
  const { fetchData, filterByDriver, filterByDateAndTime, filterByCapacity } = useReactContext();
  const [driver, setDriver] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    
    fetchData();

    if (driver !== "") {
      filterByDriver(driver === "true");
    }

    if (date && time) {
      filterByDateAndTime(date, time);
    }

    if (capacity) {
      filterByCapacity(parseInt(capacity, 10));
    }
  };

  return (
    <section id="search" className="search-box">
      <form className="search-content" onSubmit={handleSearch}>
        <div className="input-group d-flex flex-column">
          <p>Tipe Driver</p>
          <select
            className="form-select"
            id="driver"
            onChange={(e) => setDriver(e.target.value)}
          >
            <option className="item" value="" hidden>
              Pilih Tipe Driver
            </option>
            <option className="item" value="true">
              Dengan Sopir
            </option>
            <option className="item" value="false">
              Tanpa Sopir (Lepas Kunci)
            </option>
          </select>
        </div>
        <div className="input-group d-flex flex-column">
          <p>Tanggal</p>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="2022-03-23"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-group d-flex flex-column">
          <p>Waktu Jemput/Ambil</p>
          <input
            type="time"
            id="time"
            className="form-control"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="input-group d-flex flex-column">
          <p>Jumlah Penumpang (Opsional)</p>
          <div className="d-flex flex-row">
            <input
              type="number"
              className="form-control item"
              id="passanger"
              style={{ backgroundColor: "#fff" }}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success border-0 px-2 align-self-end"
          id="load-btn"
        >
          Cari Mobil
        </button>
      </form>
    </section>
  );
}
