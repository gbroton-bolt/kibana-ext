## Awesome kibana extension

The purpose of it is to save your time showing your favourite columns with one click only! </br>
Enjoy! :stonks:

## Configuration

To select new fields, please modify content in `popup.js`:
```
const columnsNames = [
  "fieldToggle-node.service_id",
  "fieldToggle-node.log_message",
  "fieldToggle-query.additional_parameters",
  // add your column names here
];
```

[!!!] To make it working side panel must be open [!!!]

The column name is `data-test-subj` attached to the button in Kibana. </br>
It can easily be broken but whatever `¯\_(ツ)_/¯`

## Installation

```
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" using the toggle switch in the upper right corner.
Click "Load unpacked" and select the directory of your extension.
```
