const ws = new WebSocket(`ws://${location.host}`);

const editor = document.getElementById('editor');
let ignoreChange = false;

editor.addEventListener('input', () => {
  if (!ignoreChange) {
    ws.send(editor.value);
  }
});

ws.onmessage = (event) => {
  ignoreChange = true;
  editor.value = event.data;
  ignoreChange = false;
};
