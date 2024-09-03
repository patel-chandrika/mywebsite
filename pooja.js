



        // Toggle skill descriptions on click
        const skillItems = document.querySelectorAll('.skills-list li');

        skillItems.forEach(item => {
            item.addEventListener('click', () => {
                const description = item.querySelector('.skill-description');
                const isVisible = description.style.display === 'block';

                // Hide all descriptions
                document.querySelectorAll('.skill-description').forEach(desc => {
                    desc.style.display = 'none';
                });

                // Toggle current description
                description.style.display = isVisible ? 'none' : 'block';
            });
        });