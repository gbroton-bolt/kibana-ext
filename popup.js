const columnsNames = [
  "fieldToggle-node.service_id",
  "fieldToggle-node.log_message",
  "fieldToggle-query.additional_parameters",
];

document.addEventListener("DOMContentLoaded", () => {
  const clickButton = document.getElementById("clickButton");

  if (clickButton) {
    clickButton.addEventListener("click", () => {
      columnsNames.forEach((columnName) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: clickButtonsByDataTestSubj,
            args: [columnName],
          });
        });
      });
    });
  } else {
    console.error("Required elements are not found in the DOM.");
  }
});

function clickButtonsByDataTestSubj(attributeValue) {
  const buttons = document.querySelectorAll(
    `[data-test-subj='${attributeValue}']`,
  );
  buttons.forEach((button) => button.click());
}
