import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	email = 'email2@email.com';
	priority = false;
	subject = 'Job rejection.';
	content = `You are not a fit. Have a nice day.`;
}

