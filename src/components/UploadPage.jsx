import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { uploadImage } from "../server";

const UploadPage = () => {
  const [formData, setFormData] = useState({ description: "", url: "" });
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = () => {
    setError("");
    uploadImage(formData)
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        setError("Ugyldig URL - prøv på nytt.");
      });
  };

  const handleFormInput = (event) => {
    const newData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newData);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {error && <div className="error-message">{error}</div>}

      <label htmlFor="input-description">Beskrivelse</label>
      <input
        type="text"
        id="input-description"
        name="description"
        placeholder="Beskrivelse"
        value={formData.description}
        onChange={handleFormInput}
      />

      <label htmlFor="input-url">URL til bilde</label>
      <input
        type="text"
        id="input-url"
        name="url"
        placeholder="URL"
        value={formData.url}
        onChange={handleFormInput}
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default UploadPage;
