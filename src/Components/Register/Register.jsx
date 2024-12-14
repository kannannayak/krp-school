import React, { useState, useEffect } from "react";
import "../Register/Register.css";

const Register = () => {
  const [selectedTournament, setSelectedTournament] = useState("");
  const [tournaments, setTournaments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    trainer_id: "",
    parent_name: "",
    dob: "",
    gender: "",
    phone: "",
    schl_name: "",
    otherCoach: "",
  });
  const [trainers, setTrainers] = useState([]);
  const [showOtherCoach, setShowOtherCoach] = useState(false);

  useEffect(() => {
    fetchTournaments();
    fetchTrainers();
  }, []);

  const fetchTournaments = () => {
    fetch("https://themithraa.com/RestApi/WebApi/tournament.php")
      .then((response) => response.json())
      .then((data) => {
        if (data?.status === true && data.Tournament) {
          const sortedTournaments = data.Tournament.sort(
            (a, b) => new Date(a.tourn_date) - new Date(b.tourn_date)
          );
          setTournaments(sortedTournaments);
        }
      })
      .catch((error) => console.error("Error fetching tournaments:", error));
  };

  const fetchTrainers = () => {
    fetch("https://themithraa.com/RestApi/userApi/trainer_dropdown.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success" && data.Data) {
          setTrainers(data.Data);
        }
      })
      .catch((error) => console.error("Error fetching trainers:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTrainerChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "other") {
      setShowOtherCoach(true);
      setFormData({ ...formData, trainer_id: "other", otherCoach: "" });
    } else {
      setShowOtherCoach(false);
      setFormData({ ...formData, trainer_id: selectedValue });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    formDataToSend.append("tournament", selectedTournament);

    try {
      const response = await fetch(
        "https://themithraa.com/RestApi/WebApi/registertournament.php",
        { method: "POST", body: formDataToSend }
      );
      const responseData = await response.json();

      if (response.ok && responseData.status) {
        alert("Registration successful!");
        setFormData({
          name: "",
          trainer_id: "",
          parent_name: "",
          dob: "",
          gender: "",
          phone: "",
          schl_name: "",
          otherCoach: "",
        });
        setSelectedTournament("");
      } else {
        alert("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="registerdetail">
      <div className="Registerpage">
        <h3 className="regtext">Tournament Register</h3>
        <form className="formdata needs-validation" onSubmit={handleSubmit}>
          <div className="formsize">
            <div className="form-group">
              <label htmlFor="tournament" className="form-label">
                Select Tournament
              </label>
              <select
                id="tournament"
                name="selectedTournament"
                className="form-control input mb-4"
                value={selectedTournament}
                onChange={(e) => setSelectedTournament(e.target.value)}
                required
              >
                <option value="">Select Tournament</option>
                {tournaments.map((tournament) => (
                  <option key={tournament.tourn_id} value={tournament.tourn_id}>
                    {tournament.tourn_name} - {tournament.tourn_date}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Stackers Name</label>
              <input
                type="text"
                name="name"
                className="form-control input mb-4"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="trainer_id" className="form-label">
                Coach Name
              </label>
              <select
                id="trainer_id"
                name="trainer_id"
                className="form-control input mb-4"
                value={formData.trainer_id}
                onChange={handleTrainerChange}
                required
              >
                <option value="">Select Coach</option>
                {trainers.map((trainer) => (
                  <option key={trainer.trainer_id} value={trainer.trainer_name}>
                    {trainer.trainer_name}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>

            {showOtherCoach && (
              <div className="form-group">
                <label className="form-label">Other Coach Name</label>
                <input
                  type="text"
                  name="otherCoach"
                  className="form-control input mb-4"
                  placeholder="Enter Other Coach Name"
                  value={formData.otherCoach}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Parent Name</label>
              <input
                type="text"
                name="parent_name"
                className="form-control input mb-4"
                placeholder="Parent Name"
                value={formData.parent_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">DOB</label>
              <input
                type="date"
                name="dob"
                className="form-control input mb-4"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="form-label">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                className="form-control input mb-4"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                name="phone"
                className="form-control input mb-4"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">School Name</label>
              <input
                type="text"
                name="schl_name"
                className="form-control input mb-4"
                placeholder="School Name"
                value={formData.schl_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btns"
                style={{
                  backgroundColor: "#6AA845",
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
