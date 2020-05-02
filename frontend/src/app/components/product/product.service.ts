import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  /* Quando o service é provido a partir do root, ele se torna um singleton,
  tendo apenas uma única instância. */
  providedIn: "root",
})
export class ProductService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
