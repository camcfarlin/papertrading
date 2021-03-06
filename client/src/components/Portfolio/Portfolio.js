import React from 'react';
import './style.css';
import { Table } from 'react-bootstrap';
const Portfolio = props => {
    return (
        <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Symbol</th>
            <th>Open</th>
            <th>Last</th>
            <th>Change</th>
            <th>High</th>
            <th>Low</th>
            <th>toggle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <th>BAC</th>
            <th>20.20</th>
            <th>20.19</th>
            <th>4.3%</th>
            <th>20.21</th>
            <th>20.18</th>
            <th>Unwatch</th>
          </tr>
          <tr>
            <td>2</td>
            <th>GOOG</th>
                        <th>1075.49</th>
                        <th>1032.19</th>
                        <th>6.3%</th>
                        <th>1084.20</th>
                        <th>1030.2</th>
                        <th>Unwatch</th>
          </tr>
          <tr>
            <td>3</td>
            <th>AAPL</th>
                        <th>218.00</th>
                        <th>220.19</th>
                        <th>32.3%</th>
                        <th>200.21</th>
                        <th>234.18</th>
                        <th>Unwatch</th>
          </tr>
        </tbody>
      </Table>
    )};
export default Portfolio;

