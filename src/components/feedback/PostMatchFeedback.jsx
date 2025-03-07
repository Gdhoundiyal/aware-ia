import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem, Alert } from "@mui/material";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const PostMatchFeedback = () => {
  // State management
  const [formData, setFormData] = useState({
    match: "",
    rating: "",
    tactics: "",
    observations: "",
  });

  const [ratingError, setRatingError] = useState("");
  const [formError, setFormError] = useState(false);

  // Predefined match options
  const matchOptions = [
    "Rangers FC (H) - 20/02/2024",
    "Manchester United (A) - 15/02/2024",
    "Chelsea (H) - 10/02/2024",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      // Validate rating input (only 1-10 allowed)
      if (value === "" || (/^\d+$/.test(value) && value >= 1 && value <= 10)) {
        setRatingError("");
      } else {
        setRatingError("Rating must be a number between 1 and 10.");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.match || !formData.rating || !formData.tactics || !formData.observations || ratingError) {
      setFormError(true);
      return;
    }

    setFormError(false);

    setFormData({ match: "", rating: "", tactics: "", observations: "" });
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Post-Match Feedback
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Select Match Dropdown */}
        <TextField
          select
          fullWidth
          label="Select Match"
          name="match"
          value={formData.match}
          onChange={handleChange}
          margin="dense"
          size="small"
        >
          {matchOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Team Performance Rating (1-10) */}
        <TextField
          fullWidth
          label="Team Performance Rating (1-10)"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          margin="dense"
          size="small"
          type="number"
          inputProps={{ min: 1, max: 10 }}
          error={!!ratingError}
          helperText={ratingError}
        />

        {/* Tactical Effectiveness */}
        <TextField
          fullWidth
          label="Tactical Effectiveness"
          name="tactics"
          value={formData.tactics}
          onChange={handleChange}
          margin="dense"
          size="small"
        />

        {/* Additional Observations (PrimeReact Editor) */}
        <Typography variant="subtitle2" mt={2} mb={1}>
          Additional Observations
        </Typography>
        <Editor
          value={formData.observations}
          onTextChange={(e) =>
            setFormData((prev) => ({ ...prev, observations: e.htmlValue }))
          }
          style={{ height: "120px" }}
        />

        {/* Error Message */}
        {formError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            All fields are mandatory.
          </Alert>
        )}

        {/* Submit Button */}
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 2, bgcolor: "#007bff", "&:hover": { bgcolor: "#0056b3" } }}
        >
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
};

export default PostMatchFeedback;
