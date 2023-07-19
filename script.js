document.addEventListener('DOMContentLoaded', function() {
    // Define your project data
    const projects = [
      { name: 'A calculator using HTML,CSS and JAVASCRIPT', link: 'https://github.com/HiwarkarVaidehi/calculator.git' },
      { name: 'Food ordering Website', link: 'https://github.com/HiwarkarVaidehi/LandingPageOfRestaurant.git' },
      { name: 'Project 3', link: 'https://project3.com' }
    ];
  
    // Function to generate project links
    function generateProjectLinks() {
      const projectList = document.getElementById('project-list');
  
      // Clear existing project links
      projectList.innerHTML = '';
  
      // Generate project links
      projects.forEach(project => {
        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = project.name;
        link.target = '_blank'; // Open link in a new tab
  
        const listItem = document.createElement('li');
        listItem.appendChild(link);
  
        projectList.appendChild(listItem);
      });
    }
  
    // Call the function to generate project links
    generateProjectLinks();
  
    // Add event listener to the LinkedIn icon
    const linkedinIcon = document.getElementById('linkedin-icon');
    linkedinIcon.addEventListener('click', redirectToLinkedIn);
  
    // Redirect to LinkedIn profile
    function redirectToLinkedIn(event) {
      event.preventDefault();
      window.location.href = 'https://www.linkedin.com/in/vaidehi-hiwarkar-8b1809254';
    }
  });
  