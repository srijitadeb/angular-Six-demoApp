import { Component } from "@angular/core";

@Component({
    selector: 'day-component',
    template: `
                <div>
                    <h4>Day Component</h4>
                    <h5>{{ date }}</h5>
                </div>
    `
})

export class DayComponent{
    date = new Date().toISOString().slice(0, 10);
}