const { ipcRenderer } = window.require('electron');
const fs = require('fs')
const path = require('path')

const asyncBtn = document.getElementById('asyncBtn');
const syncBtn = document.getElementById('syncBtn');
asyncBtn.addEventListener('click', function () {
  console.log('async msg 1');
  ipcRenderer.send('async-message');
  console.log('async msg 2');
});
ipcRenderer.on('async-message-reply', function (event, arg) {
  const message = `Message reply: ${arg}`;
  console.log(message);
});
syncBtn.addEventListener('click', function () {
  console.log('sync msg 1');
  const reply = ipcRenderer.sendSync('sync-message');
  console.log(reply);
  console.log('sync msg 2');
});

delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;