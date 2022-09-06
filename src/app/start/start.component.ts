import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  targetUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    var dialog;
    const url = window.location.origin + '/word-dialog?targetUrl=' + this.targetUrl;
    Office.context.ui.displayDialogAsync(url, { height: 50, width: 50 },
      function (asyncResult) {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
          console.log('Error showing help dialog.)' + asyncResult.error.message);
        } else {
          dialog = asyncResult.value;
          // dialog.addEventHandler(Office.EventType.DialogMessageReceived, 'Success');
        }
      });
  }
}
