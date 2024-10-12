import React from "react";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="program-section">
        <h2>Conference Program</h2>
        <p>Below are the program details for 24th June 2024.</p>
        <table className="program-table">
          <thead>
            <tr>
              <th>Date / Time</th>
              <th>Venue</th>
              <th>Program</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24-June-2024 / 9:00 am - 10:00 am (IST)</td>
              <td>A18-1 / View on Live Streaming</td>
              <td>INAUGURATION</td>
            </tr>
            <tr>
              <td>24-June-2024 / 11:00 am - 12:30 pm (IST)</td>
              <td>A18-1 / View on Live Streaming URL</td>
              <td>PLENARY TALK</td>
            </tr>
            <tr>
              <td>24-June-2024 / 1:30 pm - 3:00 pm (IST)</td>
              <td>A17 - Block</td>
              <td>Paper Presentations</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="schedule-section">
        <h3>View Presentation Schedule</h3>
        <form className="schedule-form">
          <label htmlFor="paperId">Paper ID/ Submission ID:</label>
          <input type="text" id="paperId" name="paperId" />
          <button className="schedule-btn">Show Schedule</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
