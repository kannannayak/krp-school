import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Records/Records.css";

export const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(
          "https://themithraa.com/RestApi/WebApi/worldrecord.php"
        );
        if (response.data.status) {
          const transformedRecords = response.data.fetch_worldrecord.map(
            (group) => ({
              ageGroup: group.ageGroup,
              data: group.data.map((record) => ({
                event: record.event,
                gender: record.gender === "M" ? "Male" : "Female",
                time: record.time,
                athlete: record.athlete,
                year: new Date(record.year).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }),
                country: record.country,
              })),
            })
          );
          setRecords(transformedRecords);
        }
      } catch (error) {
        console.error("Error fetching records: ", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="records-container container">
      <div className="brushstroke-container">
        <span className="brushstroke-text">KRP TOP RECORDS</span>
      </div>
        <div className="age-group-section">
          <div className="age-group-header">12th</div>
          <div className="table-responsive">
            <table className="records-table table table-striped">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Mark</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
               <tr>
                <td>1</td>
                <td>Kannan</td>
                <td>Male</td>
                <td>597</td>
                <td>2023</td>
               </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="age-group-section">
          <div className="age-group-header">11th</div>
          <div className="table-responsive">
            <table className="records-table table table-striped">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Mark</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
               <tr>
                <td>1</td>
                <td>Kannan</td>
                <td>Male</td>
                <td>597</td>
                <td>2023</td>
               </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="age-group-section">
          <div className="age-group-header">10th</div>
          <div className="table-responsive">
            <table className="records-table table table-striped">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Mark</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
               <tr>
                <td>1</td>
                <td>Kannan</td>
                <td>Male</td>
                <td>497</td>
                <td>2023</td>
               </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default Records;
