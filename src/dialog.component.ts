import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'dlg',
    template: `
    <div class="dialog">
        <!--<header><div class="title">Dialog box</div><div class="exit-button" (click)="onClickedExit()">x</div></header>-->
      <img src="https://bouncycastlenetwork-res.cloudinary.com/image/upload/f_auto,q_auto,c_limit,w_200/12edb3d1dc1a62c728724c839d9419ae">
      <button (click)="onClickedExit()">Remove Component</button>
    </div>
    `,
    styles: [`
        .dialog {
            width: 250px;
            height: 250px;
            position: absolute;
            border: 1px solid black;
            border-radius: 5px;
            overflow: hidden;
            /*position: fixed;*/
            z-index: 100;
            left: calc(50% - 125px);
            top: 100px;
        }
        .dialog button {
          left: 125px;
        }
        .dialog header {
            border-bottom: 1px solid black;
            font-size: 12px;
            padding: 5px;
            display: flex;
        }
        .dialog header .title {
            flex-grow: 1;
            cursor: default;
        }
        .dialog header .exit-button {
            cursor: pointer;
            padding: 0 5px;
        }
    `]
})
export class DialogComponent {
    close = new EventEmitter();

    onClickedExit() {
        this.close.emit('event');
    }
}
