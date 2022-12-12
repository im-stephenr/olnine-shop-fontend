import { useCallback, useRef, useState } from "react";

export const useFetchData = () => {
  const activeHttpRequest = useRef([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (url, method, body = "", headers = "") => {
      setLoading(true);
      const httpAbortCtrl = new AbortController(); // a built in function on modern browser
      activeHttpRequest.current.push(httpAbortCtrl); // push the httpAbortCtrl results to activeHttpRequest
      try {
        const response = await fetch(url, {
          signal: httpAbortCtrl.signal,
          method,
        });

        const responseData = await response.json();

        // filter all activeHttpRequest and remove the current httpAbortCtrl
        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoading(false);
        return responseData;
      } catch (err) {
        console.log(err);
        setLoading(true);
      }
    }
  );

  return { fetchData, isLoading };
};
