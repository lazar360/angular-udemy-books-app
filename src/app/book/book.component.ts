import { Component } from '@angular/core';
import { Book } from '../models/book'; 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  title:string ="";
  author:string="";
  books: Book[] = [];
  
  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")

    this.books = savedBooks ? JSON.parse(savedBooks) : []
  }

  addBook() {
    if(this.title.trim().length && this.author.trim().length){
      let newBook: Book = {
        id: Date.now(),
        title: this.title,
        author: this.author
      }
      this.books.push(newBook)
      this.title = "";
      this.author = "";

      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }
  
  deleteBook(index: number) {
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))    
    }
}
