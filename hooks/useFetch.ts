import React, { useEffect, useState } from "react";

import { Query } from "../types/query";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const useFetch = (endpoint: string, query: Query) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: query,
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error: any) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  return { loading, error, data, refetch };
};

export default useFetch;
