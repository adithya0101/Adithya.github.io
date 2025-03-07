document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const projectsLink = document.getElementById('projects-link');
    const blogLink = document.getElementById('blog-link');
    const homeSection = document.getElementById('home');
    const projectsSection = document.getElementById('projects');
    const blogSection = document.getElementById('blog');

    homeLink.addEventListener('click', function() {
        homeSection.classList.add('active');
        projectsSection.classList.remove('active');
        blogSection.classList.remove('active');
        homeLink.classList.add('active');
        projectsLink.classList.remove('active');
        blogLink.classList.remove('active');
    });

    projectsLink.addEventListener('click', function() {
        projectsSection.classList.add('active');
        homeSection.classList.remove('active');
        blogSection.classList.remove('active');
        projectsLink.classList.add('active');
        homeLink.classList.remove('active');
        blogLink.classList.remove('active');
    });

    blogLink.addEventListener('click', function() {
        blogSection.classList.add('active');
        homeSection.classList.remove('active');
        projectsSection.classList.remove('active');
        blogLink.classList.add('active');
        homeLink.classList.remove('active');
        projectsLink.classList.remove('active');
    });
});
