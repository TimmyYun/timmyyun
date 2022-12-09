import requests
import json


URL = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=b763bfe1e59fe50ddb8c76103b96437a&artist=Cher&album=Believe&format=json"
album_search_url = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=nect&api_key=b763bfe1e59fe50ddb8c76103b96437a&format=json"
artist_search = "http://ws.audioscrobbler.com/2.0/?method=artist.search"

artist_details = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo"
API_KEY = "b763bfe1e59fe50ddb8c76103b96437a"

PARAM = {"artist": "joji",
        "api_key": API_KEY,
         "format": "json"
         }

r = requests.get(url=artist_details, params=PARAM)

data = r.json()

with open("data.json", "w") as outfile:
    json.dump(data, outfile)
