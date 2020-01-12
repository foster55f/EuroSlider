export const retrieveGames = () => {
    return fetch('https://www.scorebat.com/video-api/v1/')
    .then(response => {
        if (!response.ok) {
          throw Error('Error fetching games');
        }
        return response.json();
      })
}