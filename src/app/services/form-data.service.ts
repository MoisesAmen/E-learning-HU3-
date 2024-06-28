import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Class {
  name: string;
  videoUrl: string;
  image: string;
  notes: string;
  repoUrl: string;
}

export interface Lesson {
  name: string;
  description: string;
  classes: Class[];
}

export interface Category {
  name: string;
  description: string;
  image: string | null;
  lessons: Lesson[];
}

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private category: Category = {
    name: '',
    description: '',
    image: '',
    lessons: [{ name: '', description: '', classes: [{ name: '', videoUrl: '', image: '', notes: '', repoUrl: '' }] }]
  };

  private apiUrl = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) {}

  setCategoryData(data: Partial<Category>) {
    this.category = { ...this.category, ...data };
  }

  getCategoryData(): Category {
    console.log(this.category);
    return this.category;
  }

  saveCategory(): Observable<Category> {
      console.log('Guardando categoría:', this.category);
      const formData = new FormData();
      formData.append('name', this.category.name);
      formData.append('description', this.category.description);
      if (this.category.image) {
          formData.append('image', this.category.image);
      }
      formData.append('lessons', JSON.stringify(this.category.lessons));
      return this.http.post<Category>(this.apiUrl, formData);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  setImage(image: string) {
    this.category.image = image;
  }
}
