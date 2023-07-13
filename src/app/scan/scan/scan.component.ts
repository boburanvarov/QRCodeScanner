import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {GoodsService} from '../../mains/Shared/Services/goods/goods.service';
import {take} from 'rxjs/operators';
import { log } from 'console';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

    barcode: string;
    values: any;
    products: any;

    constructor(
        private fb: FormBuilder,
        private scanService: GoodsService
    ) {
     
    }

    goodsForm = this.fb.group({
        name: ['']
    });
    additionalDoc = this.fb.group({
        additionalDocElements: this.fb.array([])
    });

    get additionalDocElements() {
        return this.additionalDoc.get('additionalDocElements') as FormArray;
    }

    newAdditionalDoc() {
        return this.fb.group({
            name: ['', Validators.required],
        });
    }

    deleteItem(index: number, elementName: any) {
        this.additionalDocElements.removeAt(index);

    }

    focusLast(){
        this.inputsProduct.changes.pipe(take(1)).subscribe({
            next: changes => changes.last.nativeElement.focus()
        });
    }

    focusFirst(){
        this.inputsProduct.changes.pipe(take(1)).subscribe({
            next: changes => changes.first.nativeElement.focus()
        });
    }


    @ViewChildren('inputsProduct') inputsProduct:  QueryList<ElementRef>;
    add(elementName: any) {
       
        elementName.push(this.newAdditionalDoc());
    }

    get name() {
        return this.goodsForm.get('name')?.value.name;
    }

    get countInBox() {
        return this.goodsForm.get('name')?.value.countInBox;
    }

    ngOnInit(): void {
        this.getGoods();
    }

    create() {
        console.log(this.additionalDocElements);
            
    }

    getGoods() {
        this.scanService.getGoods().subscribe(res => {
            this.products = res;
        });
    }

    clearForm(){
        this.additionalDocElements.clear();
    }
    countInBoxN!:any;
    checkProduct(event) {
        const productValue = event.value;
        // const countInBox = productValue.countInBox;
       this.countInBoxN = 5

        this.clearForm();
        this.focusFirst()
        this.add(this.additionalDocElements);
     
        // for (let i = 0; i < this.countInBoxN; i++) {
        //     this.add(this.additionalDocElements);
        // }
    }



    onKey() {
        // 13-enter
        // 9-tab
        
          const formLength = this.additionalDocElements.value.length
         
                if(this.countInBoxN != formLength){
                    this.focusLast()
                    this.add(this.additionalDocElements);
                  }else{
                    return
                  }
            }
            
        // this.barcode = event.target.value;
    

}
