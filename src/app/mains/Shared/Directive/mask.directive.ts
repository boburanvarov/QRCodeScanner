import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[appMask]',
})
export class MaskDirective implements OnInit {

    @Input() appCardMask = false;
    @Input() appMask: string;

    constructor(public ref: ElementRef) {
    }

    @HostListener('input')
    ngOnInit(): void {
        if (this.appMask === 'creditCard') {
            this.cardMasking();
        } else if (this.appMask === 'phone') {
            this.phoneMasking();
        }

    }

    phoneMasking() {
        const str = '998';
        this.ref.nativeElement.value = str + this.ref.nativeElement.value.substr(3, this.ref.nativeElement.value.length - 1);
    }

    cardMasking() {
        if (this.appCardMask) {
            console.log( this.ref.nativeElement.value);
            const mainStr = this.ref.nativeElement.value;
            if (mainStr.length > 16) {
                this.ref.nativeElement.value = this.ref.nativeElement.value.substr(0, 16);
            }else if(mainStr.length > 6){
                let str = this.ref.nativeElement.value;
                console.log(str.substring(12,16) );
                str =
                    str.substring(0, 6) +
                    '******' +
                    str.substring(12,16);
                this.ref.nativeElement.value = str;
            } else {
                this.ref.nativeElement.value;
            }
        }


    }


    @HostListener('keydown', ['$event']) onKeyDown(e) {
        const mainStr = this.ref.nativeElement.value;
        if ( this.appMask === 'creditCard'&& e.keyCode === 8) {
            if (mainStr.length < 14) {
                this.ref.nativeElement.value = mainStr.substring(0, 7);
                console.log(mainStr.substring(0, 7));
            }
        }
    }


}
