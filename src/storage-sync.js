```javascript
import fs from 'fs';
import path from 'path';

// Function to export JSON data to a file
export async function exportJSON(data, filePath) {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`Data exported to ${filePath}`);
  } catch (error) {
    console.error(`Error exporting data to ${filePath}: ${error.message}`);
  }
}

// Function to import JSON data from a file
export async function importJSON(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    console.log(`Data imported from ${filePath}`);
    return parsedData;
  } catch (error) {
    console.error(`Error importing data from ${filePath}: ${error.message}`);
    return null;
  }
}
```
```javascript
// Function to export JSON data to a file
export async function exportJSON(data, filePath) {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`Data exported to ${filePath}`);
  } catch (error) {
    console.error(`Error exporting data to ${filePath}: ${error.message}`);
  }
}

// Function to import JSON data from a file
export async function importJSON(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    console.log(`Data imported from ${filePath}`);
    return parsedData;
  } catch (error) {
    console.error(`Error importing data from ${filePath}: ${error.message}`);
    return null;
  }
}
```


// Function to export JSON data to a file with additional error handling for file creation
export async function exportJSON(data, filePath) {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`Data exported to ${filePath}`);
  } catch (error) {
    if (error.code === 'EACCES') {
      console.error(`Permission denied: Unable to write to ${filePath}.`);
    } else if (error.code === 'ENOENT') {
      console.error(`File not found: ${filePath}.`);
    } else {
      console.error(`Error exporting data to ${filePath}: ${error.message}`);
    }
  }
}

// Function to import JSON data from a file with additional error handling for file reading
export async function importJSON(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    console.log(`Data imported from ${filePath}`);
    return parsedData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`File not found: ${filePath}.`);
      return null;
    } else if (error.code === 'EACCES') {
      console.error(`Permission denied: Unable to read from ${filePath}.`);
      return null;
    } else {
      console.error(`Error importing data from ${filePath}: ${error.message}`);
      return null;
    }
  }
}
