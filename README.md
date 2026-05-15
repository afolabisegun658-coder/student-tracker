# Student Grade Tracker

A simple web-based application to track student grades and calculate class averages.

## Features

- ✅ **Add Students**: Easily add student names and their grades
- ✅ **Calculate Averages**: Automatically calculates the class average grade
- ✅ **Highlight Performance**: Students with above-average grades are highlighted in green
- ✅ **Delete Records**: Remove students from the tracker
- ✅ **Data Persistence**: All data is saved to browser's localStorage
- ✅ **Input Validation**: Validates student names and grades with helpful error messages
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Accessible**: Includes focus states and accessibility improvements

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Add a Student**: 
   - Enter the student's name in the "Student Name" field
   - Enter their grade (0-100) in the "Grade" field
   - Click the "Add Student" button
3. **View Results**:
   - All students appear in the table below
   - The average grade is displayed at the top
   - Students with above-average grades are highlighted in green
4. **Delete a Student**: Click the "Delete" button next to a student to remove them
5. **Data Saves Automatically**: Your data persists even after closing the browser

## Input Validation Rules

### Student Name
- Only letters, spaces, apostrophes, and hyphens are allowed
- Cannot be empty
- Examples: "John Smith", "Mary-Jane", "O'Connor"

### Grade
- Must be a number between 0 and 100
- Decimal values are allowed (e.g., 85.5)
- Browser validation prevents invalid input

## Technical Details

### Files Included
- `index.html` - Main HTML structure
- `script.js` - JavaScript logic and functionality
- `style.css` - Styling and responsive design
- `README.md` - This file

### Technology Stack
- **HTML5**: Semantic markup and form validation
- **CSS3**: Flexbox, media queries, and transitions
- **Vanilla JavaScript**: No external dependencies
- **Browser APIs**: localStorage for data persistence

### Security Features
- XSS Protection: Uses `textContent` instead of `innerHTML` for user data
- Input Validation: Validates all user inputs on both client and UI level
- Safe DOM Manipulation: Creates elements safely instead of using template literals

## Browser Compatibility

- Chrome/Edge: ✅ Full Support
- Firefox: ✅ Full Support
- Safari: ✅ Full Support
- Internet Explorer: ⚠️ Limited (no localStorage guarantee)

## Responsive Breakpoints

- **Desktop**: 800px+ (full layout with all features)
- **Tablet**: 600px - 799px (optimized touch targets)
- **Mobile**: Below 600px (stacked layout, adjusted font sizes)
- **Small Mobile**: Below 400px (minimal padding, compact view)

## Future Enhancements

- Edit existing student records
- Export grades to CSV
- Sort by name or grade
- Filter by grade range
- Add categories/classes
- Keyboard shortcuts for power users
- Dark mode

## License

MIT License - Feel free to use this project for personal or educational purposes.

## Author

Created by afolabisegun658-coder

---

**Last Updated**: May 15, 2026
