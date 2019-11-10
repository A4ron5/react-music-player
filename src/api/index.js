const token = '1f55552ce18c4112bea8612d8dda13b1';
const url = 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks'

export const fetchPlaylist = async() => {
  const data = await fetch(`https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks`, {
    method: 'GET',
    headers: {
      'Authorization': '1f55552ce18c4112bea8612d8dda13b1'
    }
  });
  return data
} 