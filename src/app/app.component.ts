import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // QUE MONGOL QUE SOY, ESTABA PROGRAMANDO FUERA DE LA CLASE.

  title = 'portafolio_kevin';
  @ViewChild('modal_img') modalImagen: ElementRef; // <---------- llamamos al elemento del HTML
  @ViewChild('caja_bolas') cajaBolas: ElementRef;

  proy11: string[] = ["p11_img01.png", "p11_img02.png", "p11_img03.png"];
  x: number = 0;
  arr_bolas: ElementRef[];

  constructor(private renderer: Renderer2){
  }

  ngOnInit(): void { // cuando la vista inicia
  }
  
  ngAfterViewInit(): void { // despues de que la vista se muestre
    this.addBolas();
    this.changeBolita(0); // al inicio coloca la bolita en la 1era pocision.
  }


  addBolas(): void{ // AÑADIMOS LAS BOLITAS AL MODAL DEPENDIENDO DEL NUMERO DE IMAGENES
    console.log('cantidad de imagenes es: ' + this.proy11.length);
    for (let i = 0; i < this.proy11.length; i++) {
      const div = this.renderer.createElement('div'); // creamos un nuevo 'div'
      this.renderer.addClass(div,'bola'); // le añadimos su clase
      this.renderer.appendChild(this.cajaBolas.nativeElement, div); // le agregamos a la caja
      console.log('i es: ' + i);
    }
  }


  changeBolita(posicion: number): void{
    const div_bolita = this.renderer.createElement('div'); // creamos un nuevo 'div'
    this.renderer.addClass(div_bolita,'bolita'); // le añadimos su clase
    const div_bola = this.cajaBolas.nativeElement.children[posicion]; // obtenemos el div bola especifico
    this.renderer.appendChild(div_bola, div_bolita); // le añadimos el div bolita dentro de este.
  }


  deleteBolitaPosterior(posicion: number): void{ // OBTENEMOS EL HIJO DEL HIJO PARA ELIMINARLO
    if(posicion == 0){posicion = this.proy11.length}; // invertimos la condicion
    const div_bola_anterior = this.cajaBolas.nativeElement.children[posicion-1];
    console.log(div_bola_anterior);
    const div_bolita_anterior = this.cajaBolas.nativeElement.children[posicion-1].children[0];
    console.log(div_bolita_anterior);
    this.renderer.removeChild(div_bola_anterior, div_bolita_anterior);
  }


  deleteBolitaAnterior(posicion: number): void{ // OBTENEMOS EL HIJO DEL HIJO PARA ELIMINARLO
    if(posicion == this.proy11.length - 1){posicion = -1}; // invertimos la condicion
    const div_bola_anterior = this.cajaBolas.nativeElement.children[posicion+1];
    console.log(div_bola_anterior);
    const div_bolita_anterior = this.cajaBolas.nativeElement.children[posicion+1].children[0];
    console.log(div_bolita_anterior);
    this.renderer.removeChild(div_bola_anterior, div_bolita_anterior);
  }


  adelante(): void{ // CAMBIAMOS LA IMAGEN POR LA QUE LE SIGUE
    this.x++; // aumentamos el contador
    const elemento = this.modalImagen.nativeElement; // obtenemos la etiqueta img
    console.log(elemento);
    if(this.x == this.proy11.length){this.x = 0};
    this.renderer.setAttribute(elemento, 'src', "assets/proyectos/proy_01/" + this.proy11[this.x]); // modificamos su atributo
    
    // cuando x llega al maximo vuelve a 0, change al 0 no hay problema, pero no se puede eliminar el (0-1)
    this.changeBolita(this.x);
    this.deleteBolitaPosterior(this.x); // si vale 0, dentro le regresamos el valor a 'this.proy11.length'
  }
  

  atras(): void{ // CAMBIAMOS LA IMAGEN POR EL DE ATRAS
    this.x--; // disminuimos el contador
    const elemento = this.modalImagen.nativeElement; // obtenemos la etiqueta img
    console.log(elemento);
    if(this.x == -1){this.x = this.proy11.length - 1};
    this.renderer.setAttribute(elemento, 'src', "assets/proyectos/proy_01/" + this.proy11[this.x]); // modificamos su atributo

    this.changeBolita(this.x); // coloca la bolita en la pocision x
    this.deleteBolitaAnterior(this.x); // elimina la bolita de la pocision 
  }

}









