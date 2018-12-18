# From https://github.com/ChrisKnott/Eel/blob/master/eel/chrome.py#L58
import sys, subprocess as sps, os


def run(options, start_urls):
    chrome_path = find_chrome_win()

    if chrome_path is not None:
        for url in start_urls:
            sps.Popen([chrome_path, '--app=%s' % url] +
                        options['chromeFlags'],
                        stdout=sps.PIPE, stderr=sps.PIPE, stdin=sps.PIPE)
    else:
        raise EnvironmentError(
            "Can't find Chrome or Chromium installation")

def find_chrome_win():
    import winreg as reg
    reg_path = r'SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe'

    for install_type in reg.HKEY_CURRENT_USER, reg.HKEY_LOCAL_MACHINE:
        try:
            reg_key = reg.OpenKey(install_type, reg_path, 0, reg.KEY_READ)
            chrome_path = reg.QueryValue(reg_key, None)
            reg_key.Close()
        except WindowsError:
            chrome_path = None
        else:
            break

    return chrome_path

print(find_chrome_win())