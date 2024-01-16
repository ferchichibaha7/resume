import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
@Component({
    selector     : 'example',
    standalone   : true,
    templateUrl  : './example.component.html',
    imports: [CommonModule,FuseCardComponent,MatIconModule],
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent
{
    show_skills = true
    /**
     * Constructor
     */
    constructor()
    {
    }
}
