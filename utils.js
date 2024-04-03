// Find the index of the "--" separator
const separatorIndex = process.argv.indexOf('--');

// Extract the parameters after the "--" separator
const parameters = process.argv.slice(separatorIndex + 1);

// Parse the parameters into key-value pairs
export const parsedParameters = {};
parameters.forEach((param) => {
  const [key, value] = param.split('=');
  parsedParameters[key.slice(2)] = value; // Remove the "--" from the key
});
