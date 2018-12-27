import { Component } from "@angular/core";

@Component({
    selector: 'welcome-component',
    template: `
        <div>
            <h5>Welcome to {{tarining_name}}</h5>
        </div>
    `
})

export class WelcomeComponent {
    tarining_name = 'Angular training'
}