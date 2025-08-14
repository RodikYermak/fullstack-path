import sys
import requests
import csv
from io import StringIO

def decode_message_from_url(url):
  response = requests.get(url)
  response.raise_for_status()

  f = StringIO(response.text)
  reader = csv.DictReader(f)

  data = [(int(row["x-coordinate"]), row["Character"], int(row["y-coordinate"])) for row in reader]

  max_x = max(d[0] for d in data)
  max_y = max(d[2] for d in data)

  grid = [[" " for _ in range(max_x + 1)] for _ in range(max_y + 1)]

  for x, char, y in data:
    grid[y][x] = char

  message = "\n".join("".join(row) for row in grid)
  return message

#   url = sys.argv[1]
  print(decode_message_from_url("https://docs.google.com/document/d/e/2PACX-1vRPzbNQcx5UriHSbZ-9vmsTow_R6RRe7eyAU60xIF9Dlz-vaHiHNO2TKgDi7jy4ZpTpNqM7EvEcfr_p/pub"))