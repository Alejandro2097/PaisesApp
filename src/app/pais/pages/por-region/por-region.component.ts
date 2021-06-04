import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
        button{
          margin-right: 5px;
        }
  `
  ]
})
export class PorRegionComponent  {

  regiones:string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  constructor(private paisService:PaisService) { }

  termino:string = 'hola mundo';
  hayError:boolean = false;
  paises:Country[] = []
  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarRegion(termino)
    .subscribe(paises =>{
      this.paises = paises;
    },(err) => {
      this.hayError = true;
      this.paises = [];
    }
    );
  }
  getClaseCSS(region:string){
    return (region === this.regionActiva) ? ' btn btn-primary':'btn btn-outline-primary'
  }

  activarRegion(region:string){
    this.regionActiva = region;
  }

}
