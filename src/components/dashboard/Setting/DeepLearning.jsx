import {
    Box,
    Button,
    Typography,
    Paper,
    TextField,
} from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const DeepLearning = () => {
    const [files, setFiles] = useState([]);

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles([...files, ...droppedFiles]);
    };

    const handleFileSelect = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles([...files, ...selectedFiles]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <Box p={3}>
            <Box component={Paper} sx={{ p: 2, border: "1px solid lightgray", borderRadius: "5px" }}>
                <Typography variant="h6" fontWeight="bold">
                    Deep Learning
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                    Upload your club's training curriculum and documents to train the Insight Engine for more relevant results.
                </Typography>

                <Paper
                    sx={{
                        p: 2,
                        border: "2px dashed #ccc",
                        textAlign: "center",
                        backgroundColor: "#f9f9f9",
                        mb: 2,
                        cursor: "pointer",
                        boxShadow:"none"
                    }}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                <CloudUploadIcon sx={{color:"gray",fontSize:"40px"}}/>
                    <Typography variant="body1">Drag and drop your documents here</Typography>
                    <Typography variant="caption" color="textSecondary">
                        Supported formats: PDF, DOC, DOCX (max 50MB)
                    </Typography>
                    <Box>
                        <Button
                            size="small"
                            component="label"
                            sx={{ mt: 1, textTransform: "capitalize", color: "black", border: "1px solid gray",px:2 }}
                        >
                            Choose Files
                            <input type="file" hidden multiple onChange={handleFileSelect} />
                        </Button>
                    </Box>
                </Paper>

                {files.length > 0 && (
                    <Box mb={2}>
                        <Typography variant="body2" fontWeight="bold">Selected Files:</Typography>
                        {files.map((file, index) => (
                            <Typography key={index} variant="body2" color="textSecondary">
                                {file.name}
                            </Typography>
                        ))}
                    </Box>
                )}

                <Typography variant="body2" mb={1}>
                    Or paste your text here:
                </Typography>
                <TextField fullWidth multiline rows={3} placeholder="Paste your training content here..." />

                <Button variant="contained" fullWidth sx={{ mt: 2, textTransform: "capitalize" }}>
                    Process Text
                </Button>
            </Box>
        </Box>
    );
};
