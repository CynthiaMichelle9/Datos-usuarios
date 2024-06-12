/* Función IIFE para cargar los datos al iniciar la página */
(async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      const users = data.results;
      const userDataContainer = document.getElementById('user-data');
      
      // Mostrar los datos en HTML
      users.forEach(user => {
        const userContainer = document.createElement('div');
        userContainer.classList.add('user-container');
        
        const img = document.createElement('img');
        img.src = user.picture.medium;
        img.alt = 'User Avatar';
        userContainer.appendChild(img);
        
        const pName = document.createElement('p');
        pName.textContent = `${user.name.first} ${user.name.last}`;
        userContainer.appendChild(pName);
        
        const pEmail = document.createElement('p');
        pEmail.textContent = `Email: ${user.email}`;
        userContainer.appendChild(pEmail);
        
        const pPhone = document.createElement('p');
        pPhone.textContent = `Phone: ${user.phone}`;
        userContainer.appendChild(pPhone);
        
        userDataContainer.appendChild(userContainer);
      });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  })();