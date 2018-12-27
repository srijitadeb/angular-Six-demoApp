import { Component } from "@angular/core";

@Component({
    selector: 'hello-component',
    template: `
        <div>
            <h5>Hello, This is {{name}}</h5>
        </div>
    `
})

export class HelloComponent {
    name= 'Srijita'
}