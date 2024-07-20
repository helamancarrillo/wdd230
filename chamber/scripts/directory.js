

document.addEventListener('DOMContentLoaded', function () {
  const gridButton = document.getElementById('gridB');
  const listButton = document.getElementById('listB');
  const display = document.getElementById('displayB');

  let membersData = []; // Array to store member data

  // Fetch data from members.json
  fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
          membersData = data.members; // Store fetched data in membersData array
          displayMembers(); // Display members initially
      })

      // Function to display members based on current view (grid or list)
  function displayMembers() {
      // Clear existing content
      //display.innerHTML = '';

      // Determine whether to display as grid or list based on current class
      const isGrid = display.classList.contains('gridB');

      membersData.forEach(member => {
          const memberSection = document.createElement('section');
          if (isGrid) {
              memberSection.innerHTML = `
                  <img src="${member.image}" alt="${member.name}" width="300" height="200" loading="lazy">
                  <h3>${member.name}</h3>
                  <p>${member.address}</p>
                  <p>${member.phone}</p>
                  <p>${member.membership}</p>
                  <a href="http://${member.website}" target="_blank">${member.website}</a>
              `;
              memberSection.classList.add('grid-item');
          } else {
              memberSection.innerHTML = `
                  <img src="${member.image}" alt="${member.name}" width="300" height="200" loading="lazy">
                  <div>
                      <h3>${member.name}</h3>
                      <p>${member.address}</p>
                      <p>${member.phone}</p>
                      <p>${member.membership}</p>
                      <a href="http://${member.website}" target="_blank">${member.website}</a>
                  </div>
              `;
              memberSection.classList.add('list-item');
          }

          display.appendChild(memberSection);
      });
  }

  // Event listeners for grid and list buttons
  gridButton.addEventListener('click', () => {
      display.classList.remove('listB');
      display.classList.add('gridB');
      gridButton.classList.add('active');
      listButton.classList.remove('active');
      displayMembers(); // Re-display members in grid view
  });

  listButton.addEventListener('click', () => {
      display.classList.remove('gridB');
      display.classList.add('listB');
      listButton.classList.add('active');
      gridButton.classList.remove('active');
      displayMembers(); // Re-display members in list view
  });
});
   