import { Component } from '@angular/core';


@Component ({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    workouts = ['111fsfd','22fsfd','sdfsfd','sdfsfd']
    onChange(e) {
        console.log(e);
    }
}
