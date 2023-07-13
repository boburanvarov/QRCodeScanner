import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {GoodsService} from '../../mains/Shared/Services/goods/goods.service';
import {SuccessResponse} from '../../mains/Shared/Utils/successResponse';

@Component({
    selector: 'app-goods',
    templateUrl: './goods.component.html',
    styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private goodService: GoodsService
    ) {

    }

    goodsForm = this.fb.group({
        name: ['', Validators.required],
        countInBox: [undefined, Validators.required]
    });

    ngOnInit(): void {
    }

    create() {
        if (this.goodsForm.invalid) {
            this.goodsForm.markAllAsTouched();
            return;
        }
        const body = {
            name: this.goodsForm.get('name').value,
            countInBox: this.goodsForm.get('countInBox').value
        };

        this.goodService.goodsCreate(body).subscribe(res => {
            SuccessResponse.successResponse(200, 'ok');
            console.log(res);
        });
    }


}
