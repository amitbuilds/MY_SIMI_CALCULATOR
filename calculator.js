/* Global Reset and Body Styling */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Modern, clean font */
  background-color: #f0f0f5; /* Light grey background */
}

/* Calculator Container */
#calculator {
  background-color: #ffffff; /* White card background */
  padding: 15px;
  border-radius: 20px; /* Softer, modern corners */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Subtle 3D lift */
  width: 320px; /* Slightly wider for better button spacing */
}

/* Display Screen */
#display {
  width: 93%; /* Use padding instead of margin for internal spacing */
  height: 60px;
  border: none;
  border-radius: 15px;
  background-color: #e9e9e9; /* Light grey display background */
  color: #333333; /* Dark text */
  font-size: 2.5em; /* Larger, clearer text */
  text-align: right;
  padding: 0 15px;
  margin-bottom: 20px; /* More space below display */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); /* Inset shadow for depth */
  box-sizing: border-box; /* Include padding in the width */
}

/* Button Grid */
.button-container {
  display: grid; /* Use CSS Grid for perfect button alignment */
  grid-template-columns: repeat(4, 1fr); /* 4 columns, equally sized */
  gap: 10px; /* Space between buttons */
}

/* Base Button Style */
.button {
  width: 100%; /* Full width of grid cell */
  padding: 0;
  height: 60px; /* Uniform height for a chunky look */
  border: none;
  border-radius: 15px; /* Rounded buttons */
  font-size: 1.5em;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #333333;
  background-color: #f9f9f9; /* Light button color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle button shadow */
}

/* Number Button Specific Styles */
.number-button {
  background-color: #ffffff;
  color: #333333;
}

/* Operator Button Specific Styles (e.g., +, -, *, /) */
.operator-button {
  background-color: #e0e0e0; /* Different shade for operators */
  color: #555555;
  font-weight: bold;
}

/* Clear Button Specific Style */
.clear-button {
  background-color: #ff6b6b; /* Reddish for clear */
  color: white;
  font-weight: bold;
}

/* Equals Button Specific Style */
.equals-button {
  background-color: #4CAF50; /* Green for equals/primary action */
  color: white;
  font-weight: bold;
  grid-column: span 1; /* Occupy only one column */
}

/* Button Hover Effects for Interactivity */
.button:hover:not(.empty-button) {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.button:active:not(.empty-button) {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Styling for the empty placeholder button */
.empty-button {
  visibility: hidden; /* Hide the button entirely but keep its space for alignment */
}
