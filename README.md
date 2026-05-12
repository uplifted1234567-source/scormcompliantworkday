# Mastering SCORM Compliance and Accessibility for Workday eLearning Integration

A SCORM-compliant eLearning course package designed for Workday integration, focusing on SCORM compliance and accessibility standards.

## Repository Structure

```
scormcompliantworkday/
├── index.html              # Main course entry point
├── imsmanifest.xml         # SCORM package manifest
├── runtime-data.js         # Course data and configuration
├── scorm-api.js            # SCORM API wrapper for LMS communication
├── lib/                    # Library files (sandbox, rise, fonts, dist)
│   ├── sandbox/            # Sandbox framework
│   ├── rise/               # RISE framework components
│   ├── dist/               # Distribution files
│   └── fonts/              # Custom fonts
└── assets/                 # Course media assets (images, videos, etc.)
```

## Features

- **SCORM 1.2 Compliant**: Full SCORM 1.2 standard support for LMS integration
- **Accessibility**: WCAG 2.1 compliant for inclusive learning
- **Workday Integration**: Optimized for Workday Learning Management System
- **Responsive Design**: Works across desktop and mobile devices

## Installation

1. Package the course as a ZIP file containing all files
2. Import into your LMS:
   - Extract the ZIP file
   - Ensure `imsmanifest.xml` is at the root level
   - Import as a SCORM course package

## Usage

### For LMS Integration

1. Upload the course package to your Workday system
2. The course will automatically initialize via the SCORM API
3. Progress is tracked automatically

### For Development

1. Clone this repository
2. Serve via a web server (required for proper functionality)
3. The `scorm-api.js` handles all LMS communication

## SCORM API Reference

The `scorm-api.js` file provides the following methods:

```javascript
// Initialize SCORM connection
ScormAPI.init();

// Set lesson status
ScormAPI.setData('cmi.core.lesson_status', 'completed');

// Set score (0-100)
ScormAPI.setScore(85);

// Mark as complete
ScormAPI.setComplete();

// Finish session
ScormAPI.finish();
```

## Key Files

- **imsmanifest.xml**: SCORM metadata and organization structure
- **index.html**: Course presentation layer
- **runtime-data.js**: Course content and configuration data
- **scorm-api.js**: LMS communication interface

## Accessibility Features

- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Color contrast compliance
- Caption support for multimedia

## Compatibility

- **LMS Platforms**: Workday, Moodle, Blackboard, Canvas, and other SCORM-compliant systems
- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **SCORM Versions**: SCORM 1.2, SCORM 2004

## Support

For issues or questions regarding SCORM compliance, refer to the [ADL SCORM Documentation](https://www.adlnet.gov/scorm/).

## License

See repository for license information.
