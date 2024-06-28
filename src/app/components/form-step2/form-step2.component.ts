import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { FormDataService, Lesson } from '../../services/form-data.service';

@Component({
  selector: 'app-form-step2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-step2.component.html',
  styleUrl: './form-step2.component.css'
})
export class FormStep2Component {

  category = this.formDataService.getCategoryData();
  lessons: Lesson[] = this.category.lessons;

  constructor(private router: Router, private formDataService: FormDataService) {}

  addClass(lessonIndex: number) {
    this.lessons[lessonIndex].classes.push({ name: '', videoUrl: '', image: '', notes: '', repoUrl: '' });
  }

  removeClass(lessonIndex: number, classIndex: number) {
    this.lessons[lessonIndex].classes.splice(classIndex, 1);
  }

  addLesson() {
    this.lessons.push({ name: '', description: '', classes: [{ name: '', videoUrl: '', image: '', notes: '', repoUrl: '' }] });
  }

  removeLesson(lessonIndex: number) {
    this.lessons.splice(lessonIndex, 1);
  }

  prevStep() {
    this.formDataService.setCategoryData({ lessons: this.lessons });
    this.router.navigate(['/step1']);
  }

  onSubmit() {
    this.formDataService.setCategoryData({ lessons: this.lessons });    
    this.router.navigate(['/step3']);
  }
}
