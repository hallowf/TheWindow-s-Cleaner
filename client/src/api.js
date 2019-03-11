
const base_url = window.location.hostname + ":" + window.location.port + "/twc-api-"

export async function callCypher(params) {
  const {drive, path} = params
  const res = await fetch(base_url + "cipher?drive=" + drive + "&path=" + path)
}

export async function saveOptions() {
  const res = await fetch(base_url + "options?req=save", { method: "POST" })
}

export async function getOptions() {
  const res = await fetch(base_url + "options?req=get")
}