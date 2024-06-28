import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-form-step1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-step1.component.html',
  styleUrl: './form-step1.component.css'
})
export class FormStep1Component {
  category = this.formDataService.getCategoryData();

  constructor(private router: Router, private formDataService: FormDataService) { }

  onNext() {
    this.formDataService.setCategoryData(this.category);
    this.router.navigate(['/step2']);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.formDataService.setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
}
