import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-dialog',
  templateUrl: './word-dialog.component.html',
  styleUrls: ['./word-dialog.component.scss']
})

// This component displays the help videos in Word dialog 
export class WordDialogComponent implements OnInit {
  targetUrl = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['targetUrl']) {
        this.targetUrl = decodeURIComponent(params['targetUrl']);
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    (async () => {
      await this.delay(5000);
      document.location.href = this.targetUrl;
    })();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
