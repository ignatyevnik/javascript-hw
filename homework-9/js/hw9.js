'use strict';

// функция addComment(commentText, authorInfo, where) добавления комментария в <div class="comments">

document.getElementById("commentForm").addEventListener("submit", commentTextField);

function commentTextField(event) {
    event.preventDefault();

    let form = event.currentTarget; //
    let textArea = form.elements.commentField;
    let nameField = form.elements.userName;

    if (nameField.value.trim().length <= 2) {
        nameField.style.border = '1px solid red';
        return;
    } else {
        nameField.style.border = '1px solid black';
    }

    if (textArea.value.trim().length <= 2) {
        textArea.style.border = '1px solid red';
        return;
    } else {
        textArea.style.border = '1px solid black';
    }

    let user = {
        name: nameField.value.trim(),
    };

    addComment(textArea.value.trim(), user, document.querySelector(".comments"));
}

function addComment(commentText, authorInfo, where) {
    let date = new Date();
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();
    let commentDiv = document.createElement("div");  // div для одного комментария
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
         <div class="comment-content">
              <p><span>${authorInfo.name}</span> | <span>${day}.${month}.${year} ${hours}:${minutes}</span></p>
              <p>${commentText}</p>
         </div>
    `;


    where.append(commentDiv);
}


let userInfo = {avatar: "img/avatar.jpg", name: "Ирина"};
// принимает на вход текст комментария
addComment("sdf dfds fdsdf sfdsdfsdf", userInfo, document.querySelector(".comments"));
