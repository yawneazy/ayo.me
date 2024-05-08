const path = require('path');

// Path to your index.html file
const indexPath = path.join(__dirname, '..', 'index.html');
console.log('IndexPath:', indexPath); // Add this line

// Start the development server with the custom template option
const child = spawn('react-scripts', ['start', '--template', indexPath], { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code);
});
