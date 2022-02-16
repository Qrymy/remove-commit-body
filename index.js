const main = () => {
  const textarea = document.getElementById("merge_message_field");

  if (textarea) {
    console.log("yes");
    textarea.value = "";
  } else {
    console.log("no");
  }
};

main();
