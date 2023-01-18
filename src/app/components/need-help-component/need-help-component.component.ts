import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-need-help-component',
  templateUrl: './need-help-component.component.html',
  styleUrls: ['./need-help-component.component.scss'],
})
export class NeedHelpComponentComponent implements OnInit {

  accordionItems: { title: string, content: string }[] = [
    {
      title: "¿Qué es una API?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae at alias ullam a. Magni debitis porro deserunt sint fugit, impedit expedita quidem quasi odio adipisci voluptatem perspiciatis cupiditate totam!"
    },
    {
      title: "¿Qué API's tenemos disponibles?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae at alias ullam a. Magni debitis porro deserunt sint fugit, impedit expedita quidem quasi odio adipisci voluptatem perspiciatis cupiditate totam!"
    },
    {
      title: "¿Cómo puedo probar las API’s disponibles?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae at alias ullam a. Magni debitis porro deserunt sint fugit, impedit expedita quidem quasi odio adipisci voluptatem perspiciatis cupiditate totam!"
    },
    {
      title: "¿Qué es una API abierta y una API cerrada?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae at alias ullam a. Magni debitis porro deserunt sint fugit, impedit expedita quidem quasi odio adipisci voluptatem perspiciatis cupiditate totam!"
    },
  ]

  constructor() { }

  ngOnInit() { }
}
