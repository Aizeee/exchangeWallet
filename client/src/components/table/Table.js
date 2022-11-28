import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function TablePagination({ data }) {
  let count = 0;
  const API_URL = "http://localhost:3500/rates";
  const [ratee, setRatee] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        response = await response.json();
        setRatee(response);
        console.log(ratee);
      } catch (err) {
        console.log(err);
      }
    };
    const interval = setInterval(() => {
      fetchApi();
      console.log("This will run every 3 seconds!");
    }, 3000);

    fetchApi();
    return () => clearInterval(interval);
  }, []);

  const element = ratee.map((item) => {
    count += 1;
    return (
      <tr>
        <th scope="row">{count}</th>
        <td>{item.primaryCurrency}</td>
        <td>{item.secondaryCurrency}</td>
        <td>{item.rate}</td>
      </tr>
    );
  });
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Primary Currency</th>
          <th scope="col">Secondary Currency</th>
          <th scope="col">Rate</th>
        </tr>
      </thead>
      <tbody>{element}</tbody>
    </Table>
  );
}
