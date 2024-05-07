// Specify the target percentages for each progress element
const targetPercentages = {
  progress1: 80,
  progress2: 50,
  progress3: 30,
  progress4: 90
};

// Function to animate progress
function animateProgress(progressId, targetPercentage) {
  const progressBar = document.getElementById(progressId);
  let currentPercentage = progressBar.value;

  // Calculate the increment value based on the target percentage
  const increment = targetPercentage / 100;

  // Use setInterval to increment the progress until the target percentage is reached
  const interval = setInterval(() => {
    currentPercentage += increment;
    progressBar.value = Math.min(currentPercentage, targetPercentage); // Ensure value does not exceed target
    if (currentPercentage >= targetPercentage) {
      clearInterval(interval); // Stop the interval when target is reached
    }
  }, 10); // Adjust speed by changing the interval duration
}

// Call animateProgress for each progress element with their target percentages
animateProgress("progress1", targetPercentages.progress1);
animateProgress("progress2", targetPercentages.progress2);
animateProgress("progress3", targetPercentages.progress3);
animateProgress("progress4", targetPercentages.progress4);
