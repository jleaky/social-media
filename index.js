const posts = $("#posts");
const postButton = $("#post-picture");

postButton.on("click", function() {
  $.get("https://dog.ceo/api/breeds/image/random", function(dogPic) {
    const pic = dogPic.message;
    const newPic = `<div class="post col">
        <img src="${pic}" alt="Dog pic">
      </div>`;

    posts.append(newPic);
  });
});
