import { Http, Response } from '@angular/http';
import { CupangService } from '../cupang/cupang.service';
import { Cupang } from '../cupang/cupang.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
    constructor (private http: Http, private cupangService: CupangService) {}

    storeCupangs() {
        return this.http.put('https://ng-cupang-book-9e973.firebaseio.com/.json', this.cupangService.getCupangs());
    }
    getCupangs() {
        this.http.get('https://ng-cupang-book-9e973.firebaseio.com/.json')
        .subscribe(
            (response: Response) => {
                const cupangs: Cupang[] = response.json();
                 this.cupangService.setCupangs(cupangs);
            }
        );
    }
}