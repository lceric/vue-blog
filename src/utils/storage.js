var storagePosition = function (pst) {
  return pst === 'session' ? window.sessionStorage : window.localStorage
}

export function setStorage (key, data, pst) {
  let setData = data
  console.info(typeof data)
  if (typeof data === 'object') {
    setData = JSON.stringify(data)
  }
  storagePosition(pst).setItem(key, setData)
}

export function getStorage (key, pst) {
  let resData = storagePosition(pst).getItem(key)
  try {
    return JSON.parse(resData)
  } catch (error) {
    return resData
  }
}

export function removeStorage (key, pst) {
  storagePosition(pst).removeItem(key)
}

export function clearStorage (pst) {
  storagePosition(pst).clear()
}
