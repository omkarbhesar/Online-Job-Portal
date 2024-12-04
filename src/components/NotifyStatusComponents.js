import React, { useState } from "react";

import "./NotifyStatus.css";

function NotifyStatus() {
  const [status, setStatus] = useState("ns-select-an-option");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleStatusChange = (e) => {
    const selectedValue = e.target.value;
    setStatus(selectedValue);

    switch (selectedValue) {
      case "ns-rejected":
        setMessage(
          "We regret to inform you that your application for the position has been rejected. This decision was made after a thorough review of your profile and qualifications. We encourage you to apply for other positions in the future that better align with your skills."
        );
        break;
      case "ns-shortlisted":
        setMessage("Congratulations! You have been shortlisted for the position.");
        break;
      case "ns-interviewcall":
        setMessage(
          "You are invited to attend an interview for the position. Please check your email for further details and confirm your availability."
        );
        break;
      case "ns-offer":
        setMessage(
          "We are pleased to offer you the position! Please review the offer letter sent to your email and let us know if you have any questions."
        );
        break;
      default:
        setMessage("");
    }
  };

  const handleSend = (e) => {
    e.preventDefault(); // Prevent form submission refresh

    // Validate Email
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate Status
    if (status === "ns-select-an-option") {
      alert("Please select a valid status.");
      return;
    }

    // Logic to send notification (for example, through an API)
    console.log(`Email: ${email}`);
    console.log(`Status: ${status}`);
    console.log(`Message: ${message}`);
    alert("Notification sent successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSend}>
        <div className="ns-container">
          <label htmlFor="ns-email" className="ns-email">
            <strong>Email Address</strong>
          </label>
          <input
            type="email"
            id="ns-email"
            placeholder="Enter the recipient's email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="ns-selectstatus" className="ns-selectstatus">
            <strong>Select Status</strong>
          </label>
          <select
            id="ns-selectstatus"
            value={status}
            onChange={handleStatusChange}
            required
          >
            <option value="ns-select-an-option">Select an Option</option>
            <option value="ns-rejected">Rejected</option>
            <option value="ns-shortlisted">Shortlisted</option>
            <option value="ns-interviewcall">Interview Call</option>
            <option value="ns-offer">Offer</option>
          </select>

          <label htmlFor="ns-message" className="ns-message">
            <strong>Message</strong>
          </label>
          <textarea
            id="ns-message"
            value={message}
            readOnly
            rows="4"
            className="ns-message-box"
          />
        </div>
        <button id="ns-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default NotifyStatus;
