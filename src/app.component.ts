import {Component, ViewChild, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import {DialogComponent} from './dialog.component';
import {DialogAnchorDirective} from './dialoganchor.directive';

@Component({
    selector: 'app-root',
    template: `
        <div dialogAnchor></div>
        <div class="open-button" (click)='openDialogBox()'>Open dialog box</div>
    `,
    styles: [`
        :host {
            display: flex;
            justify-content: center;
        }
        .open-button {
            padding: 5px;
            border: 1px solid black;
            cursor: pointer;
        }
        [dialogAnchor] {
            display: none;
        }
    `],
    entryComponents: [DialogComponent]
})
export class AppComponent {
    @ViewChild(DialogAnchorDirective) dialogAnchor: DialogAnchorDirective;

    openDialogBox() {
        this.dialogAnchor.createDialog(DialogComponent);
    }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, DialogComponent, DialogAnchorDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
