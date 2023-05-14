import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { // QUE MONGOL QUE SOY, ESTABA PROGRAMANDO FUERA DE LA CLASE.

  title = 'portafolio_kevin';

  /** Bola: div exterior con forma esferica
   *  Bolita: div initerior con forma esferica con relleno verde 
   * */

  @ViewChild('modal_img') modalImagen: ElementRef; // <---------- MODAL -> llamamos al elemento Imagen del HTML
  @ViewChild('caja_bolas') cajaBolas: ElementRef; // <---------- MODAL -> Caja de Bolas

  proy1: string[] = ["p1_img1.png", "p1_img2.png", "p1_img3.png"];
  proy2: string[] = ["p2_img1.png", "p2_img2.png", "p2_img3.png", "p2_img4.png"];
  proy3: string[] = ["p3_img1.png", "p3_img2.png", "p3_img3.png"];
  proy4: string[] = ["p4_img1.png", "p4_img2.png", "p4_img3.png"];
  proy5: string[] = ["p5_img1.png", "p5_img2.png", "p5_img3.png"];
  proy6: string[] = ["p6_img1.png", "p6_img2.png", "p6_img3.png", "p6_img4.png", "p6_img5.png"];
  proy7: string[] = ["p7_img1.gif", "p7_img2.png"];
  proy8: string[] = ["p8_img1.png", "p8_img2.png", "p8_img3.png"];
  proy9: string[] = ["p9_img1.png", "p9_img2.png", "p9_img3.png", "p9_img4.png", "p9_img5.png", "p9_img6.png", "p9_img7.png", "p9_img8.png"];
  proy10: string[] = ["p10_img1.jpg", "p10_img2.jpg", "p10_img3.jpg", "p10_img4.jpg", "p10_img5.jpg"];
  proy11: string[] = ["p11_img1.png", "p11_img2.png", "p11_img3.png"];
  proy12: string[] = ["p12_img1.png", "p12_img2.png", "p12_img3.png", "p12_img4.png", "p12_img5.png"];
  proy13: string[] = ["p13_img1.png", "p13_img2.png"];
  proy14: string[] = ["p14_img1.png", "p14_img2.png"];
  
  proy_imagenes: string[];
  proy_numero: number;

  x: number = 0; // --> indice para el orden de las bolitas
  arr_bolas: ElementRef[];

  constructor(private renderer: Renderer2){
  }

  ngOnInit(): void { // cuando la vista inicia
  }
  
  ngAfterViewInit(): void { // despues de que la vista se muestre
  }


  openModalGO(numero_proyecto: number):void{ // Identificacion del Proyecto, insercion de "Bolas" y de la primera imagen.
    this.proy_numero = numero_proyecto; // identificamos el numero del proyecto
    switch (numero_proyecto) { // obtenemos el arreglo de imagenes segun el numero del proyecto
      case 1: this.proy_imagenes = this.proy1;
        break;
      case 2: this.proy_imagenes = this.proy2;
        break;
      case 3: this.proy_imagenes = this.proy3;
        break;
      case 4: this.proy_imagenes = this.proy4;
        break;
      case 5: this.proy_imagenes = this.proy5;
        break;
      case 6: this.proy_imagenes = this.proy6;
        break;
      case 7: this.proy_imagenes = this.proy7;
        break;
      case 8: this.proy_imagenes = this.proy8;
        break;
      case 9: this.proy_imagenes = this.proy9;
        break;
      case 10: this.proy_imagenes = this.proy10;
        break;
      case 11: this.proy_imagenes = this.proy11;
        break;
      case 12: this.proy_imagenes = this.proy12;
        break;
      case 13: this.proy_imagenes = this.proy13;
        break;
      case 14: this.proy_imagenes = this.proy14;
        break;
      default: this.proy_imagenes = this.proy14;
        break;
    }
    
    // insertamos el numero de "bolas" dependiendo del numero de imagenes que tiene el proyecto e insertamos la 1era "bolita" interior
    this.addBolas();
    this.changeBolita(0); // al inicio coloca la bolita en la 1era pocision.

    // insertamos la primer imagen en el Modal dependiendo del proyecto elegido
    const elemento = this.modalImagen.nativeElement; // obtenemos la etiqueta img
    this.renderer.setAttribute(elemento, 'src', "assets/proyectos/proy_" + this.proy_numero +"/" + this.proy_imagenes[0]);
  }

  limpiar(){
    this.x = 0;
    // Eliminamos las "Bolas" de la "Caja de Bolas"
    const div_contenedor = this.cajaBolas.nativeElement; // obtenemos el Papá
    for (let index = 0; index < this.proy_imagenes.length; index++) {
      const div_contenido = this.cajaBolas.nativeElement.children[0]; // obtenemos el Hijo (bola)
      this.renderer.removeChild(div_contenedor, div_contenido);
    }
  }


  addBolas(): void{ // AÑADIMOS LAS BOLITAS AL MODAL DEPENDIENDO DEL NUMERO DE IMAGENES
    console.log('--------------------------')
    console.log('Numero del Proyecto: ' + this.proy_numero);
    console.log('Cantidad de Imagenes: ' + this.proy_imagenes.length)
    for (let i = 0; i < this.proy_imagenes.length; i++) {
      const div = this.renderer.createElement('div'); // creamos un nuevo 'div'
      this.renderer.addClass(div,'bola'); // le añadimos su clase
      this.renderer.appendChild(this.cajaBolas.nativeElement, div); // le agregamos a la caja
    }
  }


  changeBolita(posicion: number): void{
    const div_bolita = this.renderer.createElement('div'); // creamos un nuevo 'div'
    this.renderer.addClass(div_bolita,'bolita'); // le añadimos su clase
    const div_bola = this.cajaBolas.nativeElement.children[posicion]; // obtenemos el div bola especifico
    this.renderer.appendChild(div_bola, div_bolita); // le añadimos el div bolita dentro de este.
  }


  deleteBolitaPosterior(posicion: number): void{ // OBTENEMOS EL HIJO DEL HIJO PARA ELIMINARLO
    if(posicion == 0){posicion = this.proy_imagenes.length}; // invertimos la condicion
    const div_bola_anterior = this.cajaBolas.nativeElement.children[posicion-1];
    const div_bolita_anterior = this.cajaBolas.nativeElement.children[posicion-1].children[0];
    this.renderer.removeChild(div_bola_anterior, div_bolita_anterior);
  }


  deleteBolitaAnterior(posicion: number): void{ // OBTENEMOS EL HIJO DEL HIJO PARA ELIMINARLO
    if(posicion == this.proy_imagenes.length - 1){posicion = -1}; // invertimos la condicion
    const div_bola_anterior = this.cajaBolas.nativeElement.children[posicion+1];
    const div_bolita_anterior = this.cajaBolas.nativeElement.children[posicion+1].children[0];
    this.renderer.removeChild(div_bola_anterior, div_bolita_anterior);
  }


  adelante(): void{ // CAMBIAMOS LA IMAGEN POR LA QUE LE SIGUE
    this.x++; // aumentamos el contador
    const elemento = this.modalImagen.nativeElement; // obtenemos la etiqueta img
    if(this.x == this.proy_imagenes.length){this.x = 0};
    this.renderer.setAttribute(elemento, 'src', "assets/proyectos/proy_" + this.proy_numero +"/" + this.proy_imagenes[this.x]); // modificamos su atributo
    
    // cuando x llega al maximo vuelve a 0, change al 0 no hay problema, pero no se puede eliminar el (0-1)
    this.changeBolita(this.x);
    this.deleteBolitaPosterior(this.x); // si vale 0, dentro le regresamos el valor a 'this.proy11.length'
  }
  

  atras(): void{ // CAMBIAMOS LA IMAGEN POR EL DE ATRAS
    this.x--; // disminuimos el contador
    const elemento = this.modalImagen.nativeElement; // obtenemos la etiqueta img
    if(this.x == -1){this.x = this.proy_imagenes.length - 1};
    this.renderer.setAttribute(elemento, 'src', "assets/proyectos/proy_" + this.proy_numero + "/" + this.proy_imagenes[this.x]); // modificamos su atributo

    this.changeBolita(this.x); // coloca la bolita en la pocision x
    this.deleteBolitaAnterior(this.x); // elimina la bolita de la pocision 
  }

}









