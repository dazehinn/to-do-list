import { test } from "media-typer";
import { addItem, clearTodo } from "./crud.js";



test ('add and delete functions', () => {
    document.body.innerHTML =
    '<div class="todoli>' +
    '  <input type="checkbox" value="false">' +
    '  <ii id="3" contenteditable="true">d</ii>' +
    '  <img src="http://localhost:8080/2d95d30….png" class="trash">' +
    '</div>';
    addItem();
    const ToD = document.querySelector('.todo');
    expect(list).toHaveLength(1);
});