function showNotification() {
  const notification = new Notification('Teste')

  console.log(notification)
}
function requestPermission() {
  if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification()
      }
    })
  }
}

document.querySelector('button').addEventListener('click', () => {
  requestPermission();

  if (Notification.permission === 'granted') {
    showNotification();
  } 

  console.log(Notification.permission)
})



