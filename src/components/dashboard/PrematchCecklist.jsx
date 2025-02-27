import React, { useState } from "react";
import { Card, CardContent, Typography, Box, IconButton, Collapse, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const PreMatchChecklist = ({ completedTasks, refereeFees, pendingTasks }) => {
  const [expandedFees, setExpandedFees] = useState({});

  const toggleFee = (role) => {
    setExpandedFees((prev) => ({
      ...prev,
      [role]: !prev[role], // Toggle the expanded state of the fee
    }));
  };

  return (
    <Card sx={{maxWidth:"500px", p: 2, borderRadius: 3, boxShadow: 3,flexGrow:"1" }}>
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Pre-Match Checklist
          </Typography>
          <AssignmentTurnedInIcon sx={{ color: "gray" }} />
        </Box>

        {/* Completed Tasks */}
        {completedTasks.map((task, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1} mt={1}>
            <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
            <Typography>{task}</Typography>
          </Box>
        ))}

        {/* Referee Fees Section */}
        <Card sx={{ bgcolor: "#f9f9f9", p: 1, mt: 2 }}>
          <Typography fontWeight="bold">Referee Fees</Typography>
          {refereeFees.map((fee, index) => (
            <Box key={index} mt={1}>
              {/* Title and Expand Button */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={1}
                sx={{
                  bgcolor: "#ffffff",
                  borderRadius: 1,
                  cursor: "pointer",
                }}
                onClick={() => toggleFee(fee.role)}
              >
                <Typography>{fee.role}</Typography>
                <IconButton size="small">
                  {expandedFees[fee.role] ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                </IconButton>
              </Box>

              {/* Collapsible Fee Amount */}
              <Collapse in={expandedFees[fee.role]}>
                <Box p={1} pl={2}>
                  <Typography color="green" fontWeight="bold">
                    ${fee.amount}
                  </Typography>
                </Box>
              </Collapse>

              {/* Divider for separation (except last item) */}
              {index < refereeFees.length - 1 && <Divider />}
            </Box>
          ))}
        </Card>

        {/* Pending Tasks */}
        {pendingTasks.map((task, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1} mt={2}>
            <RadioButtonUncheckedIcon sx={{ color: "gray", fontSize: 18 }} />
            <Typography color="gray">{task}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default PreMatchChecklist;
