import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-form-step3',
  standalone: true,
  imports: [],
  templateUrl: './form-step3.component.html',
  styleUrl: './form-step3.component.css'
})
export class FormStep3Component {

  constructor(private router: Router, private formDataService: FormDataService) {}

  prevStep() {
    this.router.navigate(['/step2']);
  }

  /*onSubmit() {

    const category = this.formDataService.getCategoryData();
    this.formDataService.addCategory(category).subscribe(response => {
      console.log('Categoría registrada:', response);
      this.router.navigate(['/']);
    }, error => {
      console.error('Error al registrar la categoría:', error);
    });

    this.formDataService.saveCategory().subscribe(response => {
      console.log('Categoría registrada:', response);
      // Puedes redirigir a una página de confirmación o limpiar el formulario
      this.router.navigate(['/']);
    }, error => {
      console.error('Error al registrar la categoría:', error);
    });
  }*/

  onSubmit() {
    const category = this.formDataService.getCategoryData();
    this.formDataService.saveCategory().subscribe(
        response => {
            console.log('Categoría registrada:', response);
            this.router.navigate(['/']);
        },
        error => {
            console.error('Error al registrar la categoría:', error);
        }
    );
}

}
