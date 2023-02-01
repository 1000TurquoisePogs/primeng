import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/car.service';

@Component({
    templateUrl: './deferdemo.html',
    providers: [MessageService]
})
export class DeferDemo {
    cars: Car[];

    constructor(private carService: CarService, private messageService: MessageService) {}

    initData() {
        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    }
}
