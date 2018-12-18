import subprocess as sp
import string
from ctypes import windll

# Build list of all possible drives
p_drives = [drive + ":" for drive in list(string.ascii_uppercase)]

# Get local drives withouth external libs
def get_local_drives():
  drives = []
  bitmask = windll.kernel32.GetLogicalDrives()
  for letter in p_drives:
        if bitmask & 1:
            drives.append(letter)
        bitmask >>= 1
  return drives

l_drives = get_local_drives()

# TODO: Find a way to properly determine codec or format string into a readable form
def call_cypher(drive, path="\ciphtmp"):
  # Lines to ignore
  ignored_lines = [ b"\n", b""]
  # Check if valid drive and exists
  drive = drive.upper()
  if drive in l_drives:
    try:
      # Call cypher and pipe stdout and stderr
      cp = sp.Popen(["cipher", "/w:" + drive + path], stdout=sp.PIPE, stderr=sp.Pipe)
      while True:
        line = cp.stdout.readline()
        if line not in ignored_lines:
          print("Working")
          print("[RawLine: {}]".format(line))
        line = cp.stderr.readline()
        if line not in ignored_lines:
          print("error")
          print("[RawLine: {}]".format(line))
        if line in ignored_lines and cp.poll() != None:
          break
    except sp.CalledProcessError as e:
      return { "Error": e }
  else:
    return { "Error": "Uknown drive '{}'".format(drive)}


