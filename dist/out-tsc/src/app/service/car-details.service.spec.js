import { TestBed } from '@angular/core/testing';
import { CarDetailsService } from './car-details.service';
describe('CarDetailsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CarDetailsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=car-details.service.spec.js.map