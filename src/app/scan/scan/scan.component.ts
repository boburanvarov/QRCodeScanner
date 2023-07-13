import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {GoodsService} from '../../mains/Shared/Services/goods/goods.service';
import {take} from 'rxjs/operators';

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

    @ViewChildren('emailInputs') emailInputs:  QueryList<ElementRef>;
    add(elementName: any) {
        this.emailInputs.changes.pipe(take(1)).subscribe({
            next: changes => changes.first.nativeElement.focus()
        })
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

    }

    getGoods() {
        this.scanService.getGoods().subscribe(res => {
            this.products = res;
        });
    }

    checkProduct(event) {
        const productValue = event.value;
        const countInBox = productValue.countInBox;
        console.log(countInBox);


        for (let i = 0; i < countInBox; i++) {
            this.add(this.additionalDocElements);
        }
    }



    onKey(event: any) {
        this.barcode = event.target.value;
    }

}
