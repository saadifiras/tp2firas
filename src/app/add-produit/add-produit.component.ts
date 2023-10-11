import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  
})
export class AddProduitComponent implements OnInit {
  message: string;
  newProduit = new Produit();

  
  constructor(private produitService: ProduitService) { 
    this.message = '';
  }
  ngOnInit(): void {
  
  }
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit);
    this.message="produit" + this.newProduit.nomProduit +"ajouté avec succées"
  } 
}
