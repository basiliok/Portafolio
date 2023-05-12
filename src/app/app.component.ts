import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // QUE MONGOL QUE SOY ESTABA PROGRAMANDO FUERA DE LA CLASE.

  title = 'portafolio_kevin';
  @ViewChild('modal_img') modalImagen: ElementRef; // <---------- llamamos al elemento del HTML

  proy11: string[] = ["assets/proyectos/proy_01/p11_img01.png", "assets/proyectos/proy_01/p11_img02.png"];
  x: number = 0;

  constructor(private renderer: Renderer2){
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.adelante();
  }

  adelante(): void{
    const elemento = this.modalImagen.nativeElement; // obtenemos el elemento
    console.log(elemento);
    this.renderer.setAttribute(elemento, 'src', 'assets/proyectos/proy_01/p11_img02.png'); // modificamos su atributo
    //x++;
    //if(x==6){x=0};
    //document.getElementsByClassName("girl")[0].src = proy11[x];
  }
  
  atras(): void{
    //x--;
    //if( x == -1 ){x = 5};
    //document.getElementsByClassName("girl")[0].src = imagen[x];
  }

}









