import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ReactContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [driver, setDriver] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState(0);

  const isFilterActive = () => {
    return driver !== "" || (date && time) || capacity !== 0;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        // "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        "http://localhost:5000/api/v1/cars"
      );
      setData(response.data.data.cars);
      if (isFilterActive()) {
        applyFilters(response.data.data.cars);
      } else {
        setFilteredData(response.data.data.cars);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilters = (dataToFilter) => {
    let filteredResult = [...dataToFilter];

    if (driver !== "") {
      filteredResult = filteredResult.filter((item) => item.available === driver);
    }

    if (date && time) {
      filteredResult = filteredResult.filter(
        (item) => item.availableAt >= `${date}T${time}:00.000Z`
      );
    }

    if (capacity !== 0) {
      filteredResult = filteredResult.filter((item) => item.capacity >= capacity);
    }

    setFilteredData(filteredResult);
  };
  const filterByDateAndTime = (dateVal, timeVal) => {
    setDate(dateVal);
    setTime(timeVal);
    applyFilters(data);
  };

  const filterByCapacity = (value) => {
    setCapacity(value);
    applyFilters(data);
  };

  const filterByDriver = (value) => {
    setDriver(value);
    applyFilters(data);
  };

  const resetData = () => {
    fetchData();
    setFilteredData(data);
  };

  const value = {
    data,
    filteredData,
    loading,
    error,
    fetchData,
    filterByDriver,
    filterByCapacity,
    filterByDateAndTime,
    resetData,
  };

  return <ReactContext.Provider value={value}>{children}</ReactContext.Provider>;
};

const useReactContext = () => {
  const context = useContext(ReactContext);
  if (!context) {
    throw new Error("useReactContext must be used within a ContextProvider");
  }
  return context;
};

export { ContextProvider, useReactContext };
