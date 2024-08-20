document.getElementById('run-button').addEventListener('click', async () => {
    // Get code from editor
    let code = document.getElementById('code-editor').value;

    // Execute code using PyScript 
    try {
        PyScript.run(code);
 // Display output in console
 let output = document.getElementById('output-console');
 output.textContent = PyScript.output;    } catch (err) {
        console.error("Error executing Python code:", err);
        document.getElementById('output-console').textContent = "An error occurred. Check the console for details.";
    }
});