function drawPath(start, end) {
    if (start && end) {
      // Use a routing service to get the path between the start and end coordinates
      // Here, I'm using the OpenStreetMap Nominatim API as an example
      const url = `https://nominatim.openstreetmap.org/search/route?format=json&start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            const coordinates = data[0].geometry.coordinates;
  
            if (polyline) {
              map.removeLayer(polyline);
            }
  
            polyline = L.polyline(coordinates, { color: 'blue' }).addTo(map);
            map.fitBounds(polyline.getBounds());
          } else {
            alert('No path found');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while processing the request');
        });
    } else {
      alert('Please provide both starting and ending addresses');
    }
  }
  