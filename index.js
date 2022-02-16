const handler = () => {
  const textarea = document.getElementById("merge_message_field");

  if (textarea) {
    textarea.value = "";
  }
};

const observer = new MutationObserver(handler);

observer.observe(document, { childList: true, subtree: true });
