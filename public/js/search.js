const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const playlist = document.querySelector('#songName').value.trim();
  
    if (playlist) {
      const response = await fetch('/api/songs', {
        method: 'POST',
        body: JSON.stringify({ songName:playlist }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add song');
      }
    }
  };

  document
  .querySelector('#playlist-form')
  .addEventListener('submit', loginFormHandler);