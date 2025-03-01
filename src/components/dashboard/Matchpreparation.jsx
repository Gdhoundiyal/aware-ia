import React, { useState } from "react";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, Card, CardContent } from "@mui/material";

const MatchPreparation = ( {nextMatch} ) => {
  const [selectedFixture, setSelectedFixture] = useState("");
  const [fixtureTypes, setFixtureTypes] = useState({
    league: false,
    cup: false,
    tournament: false,
  });

  const handleSelectChange = (event) => {
    setSelectedFixture(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setFixtureTypes({ ...fixtureTypes, [event.target.name]: event.target.checked });
  };

  return (
    <Card sx={{ width: "100%",borderRadius: 3, boxShadow: 3,}}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Next Match preperation vs {nextMatch.opponentName} {" "}  
            Status as of date: {nextMatch.status}
        </Typography>


        {/* <FormGroup row sx={{ gap: 2 }}>
        <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
          Fixture type:
        </Typography>
          <FormControlLabel
            control={<Checkbox checked={fixtureTypes.league} onChange={handleCheckboxChange} name="league" />}
            label="League"
          />
          <FormControlLabel
            control={<Checkbox checked={fixtureTypes.cup} onChange={handleCheckboxChange} name="cup" />}
            label="Cup"
          />
          <FormControlLabel
            control={<Checkbox checked={fixtureTypes.tournament} onChange={handleCheckboxChange} name="tournament" />}
            label="Tournament"
          />
        </FormGroup> */}

        <Box sx={{ display: "flex", alignItems: "center", gap: 2,paddingTop:"10px" }}>
            <Typography sx={{ fontWeight: "bold", color: "#64748B" }}>Fixture Type:</Typography>
            <FormControl sx={{ minWidth: 160 }} size="small">
                <Select value={selectedFixture} onChange={handleSelectChange} displayEmpty>
                <MenuItem value="" disabled>Select fixture type</MenuItem>
                <MenuItem value="League">League</MenuItem>
                <MenuItem value="Cup">Cup</MenuItem>
                <MenuItem value="Tournament">Tournament</MenuItem>
                </Select>
            </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MatchPreparation;
