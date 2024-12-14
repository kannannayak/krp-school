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
        <span className="brushstroke-text">ISDA TOP RECORDS</span>
      </div>
      {records.map((group, index) => (
        <div key={index} className="age-group-section">
          <div className="age-group-header">{group.ageGroup}</div>
          <div className="table-responsive">
            <table className="records-table table table-striped">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Gender</th>
                  <th>Time</th>
                  <th>Athlete</th>
                  <th>Year</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {group.data.map((record, idx) => {
                  // Calculate row span
                  const rowSpan = group.data.filter(
                    (r) => r.event === record.event
                  ).length;
                  const isFirstOccurrence =
                    group.data.findIndex((r) => r.event === record.event) ===
                    idx;

                  return (
                    <tr key={idx}>
                      {isFirstOccurrence && (
                        <td
                          style={{ backgroundColor: "#f2f2f2" }}
                          rowSpan={rowSpan}
                          className="rowspan"
                        >
                          {record.event}
                        </td>
                      )}
                      <td>{record.gender}</td>
                      <td style={{ color: "blue" }}>{record.time}</td>
                      <td style={{ color: "blue" }}>{record.athlete}</td>
                      <td>{record.year}</td>
                      <td>{record.country}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Records;
