export async function getIpifyApi(ip) {
  try {
    const res = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.VUE_APP_APIKEY}&domain=${ip}`
      ),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    return json;
  } catch (err) {
    return err;
  }
}
