
const base_url = window.location.hostname + ":" + window.location.port + "/twc-api-"

export async function callCypher() {
  const res = await fetch(base_url + "cypher")
}

export async function saveOptions(req) {
  const res = await fetch(base_url + "options?req=" + req, {
    method: "POST"
  })
}